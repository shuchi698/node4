require("dotenv").config();
const Users = require("../models/Users");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerController = (req, res, next) => {

    const { name, number, email, password } = req.body;

    Users.push(req.body)

    if(Users.push(req.body)) {
        res.status(201).json({
            message: "User successfully registered",
            data: Users
        })
    } else {
        res.status(400).json({
            message: "User has not registered, please try again"
        })
    }
};

const loginController = (req, res, next) => {

    const { email, password } = req.body;

    // Search for the users in the Users array----

    const user = Users.find(ele => ele.email = email)

    if (user) {

        // Load hash from your password DB.
        bcrypt.compare(password, user.password, function(err, result) {
            //result == true
            if(result == true) {

                //Generating the token
                const token = jwt.sign({email: email}, process.env.SECRET);

                res.status(201).json({
                    message: "User has logged in successfully",
                    token: token
                })
            }
            else {
                res.status(400).json({
                    message: "Wrong Password"
                })
            }
        });

    }
    else {
        res.status(400).json({
            message: "User is not registered"
        })
    }

};

module.exports = {
    registerController,
    loginController
}