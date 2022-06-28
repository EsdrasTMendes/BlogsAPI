const express = require('express');

const blogPostRouters = express.Router();

const { postBlogPost } = require('../services/blogPost.service');

blogPostRouters.post('/post', async (req, res) => {
  const { id } = res.locals.payload;
  const { status, response } = await postBlogPost(id, req.body);
  res.status(status).json(response);
});

module.exports = blogPostRouters;