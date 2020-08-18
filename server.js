const express = require('express');
const helmet = require('helmet');

//Router import here
const authRouter = require("./auth/authRouter")
const usersRouter = require("./users/users-router")

//Global Middleware here
const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h2> Node auth 1 project is UP! </h2>`)
})

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

module.exports = server;