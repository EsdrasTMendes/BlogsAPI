module.exports = (err, req, res, _next) => {
  console.log('ENTROU ERRO');
  res.status(err.status || 500)
  .json({ message: err.message || 'Erro inesperado. Por favor, tente mais tarde' });
};