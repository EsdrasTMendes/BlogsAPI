const { User } = require('../database/models');
const generateJWTToken = require('../utils/JWTToken');

const authentication = async ({ user, password }) => {
if (!user || !password) {
  throw new Error({ status: 401, message: 'User e password são obrigatórios' });
  }
  const verifyUser = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'password'], 
    where: { user, password },
  });

  if (!verifyUser) {
    throw new Error({
      status: 401, message: 'Usuário ou senha inválido',
    });
  }
  // Gerando o Token
  const token = await generateJWTToken(verifyUser.dataValues);
  return { token };
};

module.exports = authentication;