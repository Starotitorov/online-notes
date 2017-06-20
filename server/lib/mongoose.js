const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reactjs-nodejs');
module.exports = mongoose;
