const Ads = require('../models/Ads');

// @route /api/ad

const createAd = async (req, res) => {
    if (!req.body.name || !req.body.user) {
        res.status(404).send("Not found")
    }

    const ad = await Ads.create({
        name: req.body.name,
        user: req.body.user
    })
    res.status(200).json(ad)
}

// @route /api/ads

const getAds = async (req, res) => {
    const ads = await Ads.find().populate('user');
    if (!ads) { res.status(404).send('Not found') }
    else {
        res.status(200).json(ads)
    }
}

module.exports = { createAd, getAds }
