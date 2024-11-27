var resultadoModel = require("../models/resultadoModel");

function mostrarResultado(req, res) {
    var idPraia = req.body.identificador;
 }

 resultadoModel.mostrarResultado(idPraia).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });

  module.exports = {
    mostrarResultado
}
