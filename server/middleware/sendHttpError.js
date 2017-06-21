module.exports = function(req, res, next) {

    res.sendHttpError = function(error) {
        res.json(error.status, {error: error.message});
    };

    next();

};
