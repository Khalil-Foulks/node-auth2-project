const jwt = require("jsonwebtoken")
const constants = require('../config/constants')

module.exports = (req, res, next) => {
    // verifes users are logged in
    const token = req.headers.authorization;
  
    if(token){
      jwt.verify(token, constants.jwtSecret, (error, decodedToken) => {
        if(error) {
          //if token is invalid or modified
          res.status(401).json({ message: "Invalid Token"})
        }else {
          //if token is valid we have access to info inside token
          req.decodedToken = decodedToken;
          next();
        }
      })
    }else {
      res.status(401).json({ message: "Please provide credentials"})
    }
    
};