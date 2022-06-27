const express = require('express');
const { postUser, getAllUsers, getUserById } = require('../services/user.service');

const userRouter = express.Router();
userRouter.post('/user', async (req, res) => {
  const { status, response } = await postUser(req.body);
  return res.status(status).json(response);
});

userRouter.get('/user', async (req, res) => {
  const { status, response } = await getAllUsers();
  return res.status(status).json(response);
});

userRouter.get('/user/:id', async (req, res) => {
const { id } = req.params;
const { status, response } = await getUserById(id);
res.status(status).json(response);
});

module.exports = userRouter;