const express = require('express');
const User = require('models/user').User;
const HttpError = require('error').HttpError;
const AuthError = require('models/user').AuthError;
const jwt = require('jsonwebtoken');
const config = require('config');

const apiRoutes = express.Router();

function generateJwt(payload) {
    return jwt.sign(payload, config.get('secret'), {
        expiresIn : 86400 // expires in 24 hours
    });
}

apiRoutes.post('/signin', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.authorize(email, password, (err, user) => {
        if (err) {
            if (err instanceof AuthError) {
                return next(new HttpError(403, 'Invalid credentials.'));
            } else {
                return next(err);
            }
        }

        res.json(
            200,
            {
                token: generateJwt({ id: user.id }),
                user: {
                    id: user.id,
                    email: user.email
                }
            }
        );
    });
});

apiRoutes.post('/signup', (req, res, next) => {
    if (!req.body.email || !req.body.password || !req.body.passwordConfirmation) {
        return next(new HttpError(422, 'Please pass all credentials.'));
    }

    if (req.body.password !== req.body.passwordConfirmation) {
        return next(new HttpError(422, 'Password confirmation does not match password.'));
    }

    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    });

    newUser.save((err, user) => {
        if (err) {
            return next(new HttpError(409, 'Email has already been taken.'));
        }

        res.json(
            200,
            {
                token: generateJwt({ id: user.id }),
                user: {
                    id: user.id,
                    email: user.email
                }
            }
        );
    });
});

module.exports.apiRoutes = apiRoutes;
