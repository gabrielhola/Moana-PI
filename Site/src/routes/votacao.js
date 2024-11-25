var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");

router.get("/:idPraia", function (req, res) {
  votacaoController.buscarVotacao(req, res);
});

router.post("/cadastrar", function (req, res) {
  votacaoController.cadastrar(req, res);
})

module.exports = router;