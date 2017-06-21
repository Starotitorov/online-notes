const crypto = require('crypto');
const async = require('async');
const mongoose = require('lib/mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

schema.methods.encryptPassword = function(password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

schema.virtual('password')
    .set(function(password) {
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function() {
        return this._plainPassword;
    });

schema.methods.checkPassword = function(password) {
    return this.encryptPassword(password) === this.hashedPassword;
};

schema.statics.authorize = function(email, password, callback) {
    const User = this;

    async.waterfall([
        (callback) => {
            User.findOne({ email: email }, callback);
        },
        (user, callback) => {
            if (user) {
                if (user.checkPassword(password)) {
                    callback(null, user);
                } else {
                    callback(new AuthError('Wrong password.'))
                }
            } else {
                callback(new AuthError('Wrong email'));
            }
        }
    ], callback);
};

class AuthError extends Error {
    constructor(message) {
        super(arguments);

        this.name = this.constructor.name;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = (new Error(message)).stack;
        }

        this.message = message;
    }
}

module.exports.User = mongoose.model('User', schema);
module.exports.AuthError = AuthError;
