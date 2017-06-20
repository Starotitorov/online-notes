require('app-module-path').addPath(__dirname);

const async = require('async');
const faker = require('faker');
const mongoose = require('lib/mongoose');

async.series([
    open,
    dropDatabase,
    requireModels,
    createUsers
], function(err) {
    mongoose.disconnect();
    process.exit(err ? 255 : 0);
});

function open(callback) {
    mongoose.connection.on('open', callback);
}

function dropDatabase(callback) {
    const db = mongoose.connection.db;
    db.dropDatabase(callback);
}

function requireModels(callback) {
    require('models/user');

    async.each(Object.keys(mongoose.models), function(modelName, callback) {
        mongoose.models[modelName].ensureIndexes(callback);
    }, callback);
}

function createUsers(callback) {
    async.times(10, function(userData, callback) {
        const user = new mongoose.models.User({
            email: faker.internet.email(),
            password: faker.internet.password()
        });
        user.save(callback);
    }, callback);
}
