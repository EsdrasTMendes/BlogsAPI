const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull:false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true},
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, {
    timestamp: false,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,
        { foreignKey: 'userId', as: 'postId' });
      };
  return BlogPost;
}

module.exports = BlogPost;