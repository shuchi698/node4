const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const encryptPassword = (req, res, next) => {

    const myPlainTextPassword = req.body.password;
    const saltRounds = 5;

    bcrypt.hash(myPlainTextPassword, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        req.body.password = hash;

        next(); // due to asynchronous nature this callback will be called later if we use it outside it will already move flow to next middleware
    });
}


module.exports = {
    encryptPassword
}