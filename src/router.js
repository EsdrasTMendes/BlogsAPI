const express = require('express');

const routers = express.Router();
const authController = require('./controllers/auth.controller');
const middlewareError = require('./middlewares/error');

routers.use('/login', authController, middlewareError);
// routers.post('/login');
// routers.get('/user');

module.exports = routers;