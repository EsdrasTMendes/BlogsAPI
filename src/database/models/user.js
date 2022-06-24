const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true},
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Users',
    timestamp: false,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { as: 'blogPosts' ,
      foreignKey: 'id', as: 'userId'});
  };
  return User;
}

module.exports = User;