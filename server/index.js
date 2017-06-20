'use strict';

require('app-module-path').addPath(__dirname);

const app = require('./app');
const config = require('config');

app.listen(config.get('port'), () => {
    console.log(`App listening on port ${config.get('port')}!`);
});
