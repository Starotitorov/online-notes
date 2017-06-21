const User = require('models/user').User;
const jwt = require('jsonwebtoken');
const config = require('config');
const async = require('async');

module.exports = function(req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    req.user = null;

    if (!token) {
        return next();
    }

    async.waterfall([
        (callback) => {
            jwt.verify(token, config.get('secret'), (err, decodedToken) => {
                if (err) {
                    callback(new HttpError(400, 'Failed to authenticate token.'));
                } else {
                    callback(null, decodedToken);
                }
            });
        },
        (decodedToken, callback) => {
            User.findOne({ _id: decodedToken._id }, callback);
        },
        (user, callback) => {
            if (user) {
                req.user = user;
            }
            callback();
        }
    ], next);
};
