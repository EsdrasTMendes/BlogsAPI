const express = require('express');

const routers = express.Router();
const authController = require('./controllers/auth.controller');
const validateDataLogin = require('./middlewares/validateDataLogin');
// const middlewareError = require('./middlewares/error');

routers.post('/login', validateDataLogin, authController);

module.exports = routers;