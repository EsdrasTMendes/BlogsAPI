const express = require('express');
const userService = require('../services/user.service');

const userRouter = express.Router();
userRouter.post('/user', async (req, res) => {
  const { status, response } = await userService.postUser(req.body);
  return res.status(status).json(response);
});

module.exports = userRouter;