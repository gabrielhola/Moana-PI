var express = require("express");
var router = express.Router();

var socialController = require("../controllers/socialController");

router.get("fkUsuario/:conteudo/:dataFormatada", function (req, res) {
  socialController.contribuir(req, res);
});

router.post("/contribuir", function (req, res) {
  console.log("Recebendo Voto")
  socialController.contribuir(req, res);
});

router.get("/exibirContribuicao", function (req, res) {
    console.log("Enviando contribuição")
    socialController.exibirContribuicao(req, res);
});

module.exports = router;