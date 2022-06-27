const express = require('express');
const { postCategory } = require('../services/categories.service');

const categoriesRouter = express.Router();

categoriesRouter.post('/categories', async (req, res) => {
  const { status, response } = await postCategory(req.body);
  return res.status(status).json(response);
});

module.exports = categoriesRouter;