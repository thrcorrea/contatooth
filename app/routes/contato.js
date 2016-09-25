function verificaAutorizacao(req, res, next){
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).json('Não autorizado.');
  };
};

module.exports = function(app){
  var controller = app.controllers.contato;

  app.route('/contatos')
    .get(verificaAutorizacao,controller.listaContatos)
    .post(verificaAutorizacao,controller.salvaContato);

  app.route('/contatos/:id')
    .get(verificaAutorizacao,controller.obtemContato)
    .delete(verificaAutorizacao,controller.removeContato);
};
