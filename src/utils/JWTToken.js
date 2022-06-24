const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'LordOffXablau';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => jwt.sign(payload, SECRET, jwtConfig);

module.exports = generateJWTToken;