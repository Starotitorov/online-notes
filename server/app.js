const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const log = require('lib/log')(module);
const apiRoutes = require('routes').apiRoutes;
const HttpError = require('error').HttpError;

const app = express();

app.use(
    morgan(
        ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
    )
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('middleware/sendHttpError'));
app.use(require('middleware/loadUser'));

app.use('/api', apiRoutes);

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.use((err, req, res, next) => {
    if (typeof err === 'number') {
        err = new HttpError(err);
    }

    if (err instanceof HttpError) {
        res.sendHttpError(err);
    } else {
        if (app.get('env') === 'development') {
            errorHandler()(err, req, res, next);
        } else {
            log.error(err);
            err = new HttpError(500);
            res.sendHttpError(err);
        }
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
