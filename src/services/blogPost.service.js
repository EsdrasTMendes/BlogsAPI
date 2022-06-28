const { BlogPost, PostCategory } = require('../database/models');

const postBlogPost = async (userId, { title, content, categoryIds }) => {
  const { dataValues } = await BlogPost.create({
    title,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });

  await Promise.all(categoryIds.map(async (categoryId) => {
    await PostCategory.create({ postId: dataValues.id, categoryId });
  }));

  return { status: 201, response: dataValues };
};

module.exports = {
postBlogPost,
};