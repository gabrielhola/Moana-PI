var votacaoModel = require("../models/votacaoModel");

function votar(req, res) {
  console.log("BODY")
  console.log(req.body)
  var fkUsuario = req.body.idUsuarioServer;
  var fkPraia = req.body.idPraiaServer;

  votacaoModel.votar(fkUsuario, fkPraia).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao votar: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


module.exports = {
    votar
}