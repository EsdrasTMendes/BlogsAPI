const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define('BlogPost', {
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

  BlogPostSchema.associate = (models) => {
    BlogPostTable.belongsTo(models.User,
        { foreignKey: 'userId', as: 'postId' });
      };
  return BlogPostTable;
}

module.exports = BlogPostSchema;