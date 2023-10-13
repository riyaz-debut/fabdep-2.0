'use strict';
const mongoose = require('mongoose');
const config = require('./config');

let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
};

mongoose.connect('mongodb://' + config.env.database.host + ':' + config.env.database.port + '/' + config.env.database.name, options, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connected to ' + config.env.database.name);
    }
});

module.exports = mongoose;