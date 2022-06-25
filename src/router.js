const express = require('express');

const routers = express.Router();
const authController = require('./controllers/auth.controller');
const validateDataLogin = require('./middlewares/validateDataLogin');
const validateUser = require('./middlewares/validateUser');
const userController = require('./controllers/user.controller');

routers.post('/login', validateDataLogin, authController);
routers.post('/user', validateUser, userController);
module.exports = routers;