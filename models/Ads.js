const mongoose = require('mongoose');

const Ads = mongoose.model('Ads', new mongoose.Schema({
    name: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    date: {type: Date, default: Date.now}
}))

module.exports = Ads;