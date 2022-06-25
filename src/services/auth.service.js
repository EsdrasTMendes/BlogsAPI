const { User } = require('../database/models');
const generateJWTToken = require('../utils/JWTToken');

const authentication = async ({ email, password }) => {
  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email'],
    where: { email, password },
  });
  if (!user) {
    return { status: 400, response: { message: 'Invalid fields' } };
  }
  const token = generateJWTToken(user.dataValues);
  return { status: 200, response: { token } }; 
};

module.exports = { authentication };