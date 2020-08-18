const express = require("express");
const bcryptjs = require("bcryptjs");

const Users = require("../users/users-model");
const { isValid } = require("../users/users");
const constants = require('../config/constants');

const router = express.Router();

router.post("/register", (req, res) => {
    const credentials = req.body;

    if(isValid(credentials)){
        // hash the password
        const hash = bcryptjs.hashSync(credentials.password, rounds);

        credentials.password = hash;

        //save the user to the database
        Users.add(credentials)
            .then(user => {
                res.status(201).json({ data: user})
            })
            .catch(error => {
                res.status(500).json({ message: error.message });
            });
    }else {
        res.status(400).json({
          message: "please provide username and password and the password shoud be alphanumeric",
        });
    }
})

router.post("/login", (req, res) => {
    
})

module.exports = router;