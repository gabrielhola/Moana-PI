var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");

router.get("fkUsuario/:fkPraia", function (req, res) {
  votacaoController.votar(req, res);
});

router.post("/votar", function (req, res) {
  console.log("Recebendo Voto")
  votacaoController.votar(req, res);
});

module.exports = router;