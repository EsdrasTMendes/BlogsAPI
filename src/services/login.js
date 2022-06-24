const User = require('../database/models');

const getUsers = async () => {
  const Users = User.findAll({
    attributes: { excludes: ['password'] },
    include: { model: User, as: 'user' },
  });
  return Users;
};

module.exports = {
  getUsers,
};