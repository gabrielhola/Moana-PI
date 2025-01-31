var curiosidadesModel = require("../models/curiosidadesModel");

  function obterUsuariosNaoPraia(req, res) {
    curiosidadesModel.obterUsuariosNaoPraia().then(function (resultado) {
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

function obterUsuariosSimPraia(req, res) {
    curiosidadesModel.obterUsuariosSimPraia().then(function (resultado) {
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

  module.exports = {
    obterUsuariosNaoPraia,
    obterUsuariosSimPraia
}