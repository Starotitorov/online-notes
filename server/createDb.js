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
    const users = [{
        email: 'starotitorov1997@gmail.com',
        password: 'artem1997'
    }];

    for (let i = 0; i < 10; ++i) {
        users.push({
            email: faker.internet.email(),
            password: faker.internet.password()
        });
    }

    async.each(users, function(userData, callback) {
        const user = new mongoose.models.User(userData);
        user.save(callback);
    }, callback);
}
