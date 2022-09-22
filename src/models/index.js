const mongoose = require('mongoose');

const UsersModel = require('./users/index');

const models = {};

mongoose.connect('mongodb://localhost/usersList')
    .then(() => console.log('Connected to mongo.'))
    .catch(console.log);

models.UsersModel = UsersModel;

module.exports = models;