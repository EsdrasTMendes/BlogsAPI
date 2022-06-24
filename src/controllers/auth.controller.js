const express = require('express');
const authService = require('../services/auth.service');

const authRouter = express.Router();
authRouter.post('/', async (req, res, _next) => {
  const token = await authService.authentication(req.body);
  res.status(200).json(token);

});

module.exports = authRouter;