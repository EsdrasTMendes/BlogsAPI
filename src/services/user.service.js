const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/JWTToken');

const postUser = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({
    attributes: ['displayName', 'email'],
    where: { email },
  });
  if (user) {
    return { status: 409, response: { message: 'User already registered' } };
  }
  const newuser = await User.create({ displayName, email, password, image });
  const token = generateJWTToken({ displayName, email });
  console.log(newuser);

  return { status: 201, response: { token } }; 
};

const getAllUsers = async () => {
const users = await User.findAll({
  attributes: { exclude: ['password'] },
});
return { status: 200, response: users };
};

const getUserById = async (id) => {
const user = await User.findByPk(id, {
  attributes: { exclude: 'password' },
});
if (!user) {
  return { status: 404, response: { message: 'User does not exist' } };
}
return { status: 200, response: user };
};

module.exports = { postUser, getAllUsers, getUserById };