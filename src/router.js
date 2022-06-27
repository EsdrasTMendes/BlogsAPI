const express = require('express');

const routers = express.Router();
const authController = require('./controllers/auth.controller');
const validateDataLogin = require('./middlewares/validateDataLogin');
const validateUser = require('./middlewares/validateUser');
const userController = require('./controllers/user.controller');
const categoriesController = require('./controllers/categories.controller');
const validateToken = require('./middlewares/validateToken');

routers.post('/login', validateDataLogin, authController);
routers.post('/user', validateUser, userController);
routers.get('/user', validateToken, userController);
routers.get('/user/:id', validateToken, userController);

routers.post('/categories', validateToken, categoriesController);
module.exports = routers;