const mongoose = require('mongoose');

const Users = mongoose.model('User', new mongoose.Schema({
    name: String,
    about: String,
    date: {type: Date, default: Date.now},
}))

module.exports = Users;