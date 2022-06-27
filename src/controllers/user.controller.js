const express = require('express');
const { postUser, getAllUsers } = require('../services/user.service');

const userRouter = express.Router();
userRouter.post('/user', async (req, res) => {
  const { status, response } = await postUser(req.body);
  return res.status(status).json(response);
});

userRouter.get('/user', async (req, res) => {
  const { status, response } = await getAllUsers();
  return res.status(status).json(response);
});

module.exports = userRouter;