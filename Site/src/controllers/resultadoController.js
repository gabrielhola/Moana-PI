var resultadoModel = require("../models/resultadoModel");

  function obterDados(req, res) {
      resultadoModel.obterDados().then(function (resultado) {
          if (resultado.length > 0) {
              res.status(200).json(resultado);
          } else {
              res.status(204).send("Nenhum resultado encontrado!")
          }
      }).catch(function (erro) {
          console.log(erro);
          console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
          res.status(500).json(erro.sqlMessage);
      });
  }

  function obterPraiaMaisVotos(req, res) {
    resultadoModel.obterPraiaMaisVotos().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log("Houve um erro ao buscar os resultados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterPraiaMenosVotos(req, res) {
  resultadoModel.obterPraiaMenosVotos().then(function (resultado) {
      if (resultado.length > 0) {
          res.status(200).json(resultado);
      } else {
          res.status(204).send("Nenhum resultado encontrado!")
      }
  }).catch(function (erro) {
      console.log("Houve um erro ao buscar os resultados: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}

function obterNumeroVotos(req, res) {
  resultadoModel.obterNumeroVotos().then(function (resultado) {
      if (resultado.length > 0) {
          res.status(200).json(resultado);
      } else {
          res.status(204).send("Nenhum resultado encontrado!")
      }
  }).catch(function (erro) {
      console.log("Houve um erro ao buscar os resultados: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
}


  module.exports = {
    obterDados,
    obterPraiaMaisVotos,
    obterPraiaMenosVotos,
    obterNumeroVotos
}
