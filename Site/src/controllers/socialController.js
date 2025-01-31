var socialModel = require("../models/socialModel");

function contribuir(req, res) {
  console.log("BODY")
  console.log(req.body)
  var fkUsuario = req.body.idUsuarioServer;
  var conteudo = req.body.conteudoServer
  var dataFormatada = req.body.dataContribuicaoServer;

  socialModel.contribuir(fkUsuario, conteudo, dataFormatada).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao enviar a contribuição: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function exibirContribuicao(req, res) {
    socialModel.exibirContribuicao().then(function (resultado) {
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

function obterUsuariosContribuicao(req, res) {
  socialModel.obterUsuariosContribuicao().then(function (resultado) {
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
    contribuir,
    exibirContribuicao,
    obterUsuariosContribuicao
}