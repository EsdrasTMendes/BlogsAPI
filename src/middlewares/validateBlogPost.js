const { getCategoryById } = require('../services/categories.service');

const validateBlogPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  let error;
  await Promise.all(
    categoryIds.map(async (Id) => {
      const result = await getCategoryById(Id);
      if (!result) error = true;
    }),
  );

  if (error) return res.status(400).json({ message: '"categoryIds" not found' });
  next();
};

module.exports = validateBlogPost;