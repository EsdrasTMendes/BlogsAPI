const express = require('express');
const authService = require('../services/auth.service');

const authRouter = express.Router();
authRouter.post('/login', async (req, res) => {
  const { status, response } = await authService.authentication(req.body);
  res.status(status).json(response);
});

module.exports = authRouter;