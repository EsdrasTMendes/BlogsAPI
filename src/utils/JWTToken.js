const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'LordOffXablau';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => jwt.sign(payload, SECRET, jwtConfig);

const verifyToken = async (token) => {
  if (!token) {
    return { status: 401, response: { message: 'Token not found' }, error: true };
  }
  try {
    const introspection = await jwt.verify(token, SECRET, jwtConfig);
    return { status: 200, payload: introspection, error: false };
  } catch (e) {
    return { status: 401, response: { message: 'Expired or invalid token' }, error: true };
  }
};

module.exports = { 
  generateJWTToken, 
  verifyToken,
};