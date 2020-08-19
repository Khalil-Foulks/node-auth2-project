const express = require("express");

const Users = require("../users/users-model");

const router = express.Router();

const restricted = require("../auth/restricted-mw")

router.get("/", restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.status(200).json({data: users})
        })
        .catch(err => res.send(err))
})

module.exports = router;