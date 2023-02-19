const mongoose = require('mongoose');
const Users = require('../models/Users');

// @route /api/user

const createUser = async (req, res) => {
    if (!req.body.name || !req.body.about) {
        res.status(404).send("Not found")
    }

    const user = await Users.create({
        about: req.body.about,
        name: req.body.name
    })

    res.status(200).json(user)
}

module.exports = createUser;