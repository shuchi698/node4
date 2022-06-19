const express = require('express');
const userRoutes = express.Router();
const { registerController, loginController } = require("../controllers/user.controller");
const { encryptPassword } = require('../middlewares/user.middleware');

userRoutes.post('/register', encryptPassword, registerController);
userRoutes.post('/login', loginController);

module.exports = userRoutes;