var express = require("express");
var router = express.Router();

var socialController = require("../controllers/socialController");

// Rota que pega os dados do site para enviar ao banco de dados
router.get("fkUsuario/:conteudo/:dataFormatada", function (req, res) {
  socialController.contribuir(req, res);
});

// Rota para inserir os dados do site para o banco de dados
router.post("/contribuir", function (req, res) {
  console.log("Recebendo Contribuição")
  socialController.contribuir(req, res);
});

// Rota para enviar os dados do banco de dados para os caminhos certos
router.get("/exibirContribuicao", function (req, res) {
    console.log("Enviando contribuição")
    socialController.exibirContribuicao(req, res);
});

// Rota para enviar os dados do banco de dados para os caminhos certos
router.get("/obterUsuariosContribuicao", function (req, res) {
  console.log("Enviando contribuição do usuario")
  socialController.obterUsuariosContribuicao(req, res);
});

module.exports = router;