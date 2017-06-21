const express = require('express');
const User = require('models/user').User;
const HttpError = require('error').HttpError;
const AuthError = require('models/user').AuthError;
const jwt = require('jsonwebtoken');
const config = require('config');

const apiRoutes = express.Router();

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

        const token = jwt.sign(user, config.get('secret'), {
            expiresIn : 86400 // expires in 24 hours
        });
        res.json(
            200,
            {
                token: token,
                user: {
                    id: user._id,
                    email: user.email
                }
            }
        );
    });
});

module.exports.apiRoutes = apiRoutes;
