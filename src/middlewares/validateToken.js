const generateJWTToken = require('../utils/JWTToken');

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  const { payload, status, response, error } = await generateJWTToken.verifyToken(token);
  if (error) {
    return res.status(status).json(response);
  }
  res.locals.payload = payload;
  next();
};

module.exports = validateToken;