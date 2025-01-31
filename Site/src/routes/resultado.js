var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/obterDados", function (req, res) {
    resultadoController.obterDados(req, res);
});

router.get("/obterPraiaMaisVotos", function (req, res) {
    resultadoController.obterPraiaMaisVotos(req, res);
});

router.get("/obterPraiaMenosVotos", function (req, res) {
    resultadoController.obterPraiaMenosVotos(req, res);
});

router.get("/obterNumeroVotos", function (req, res) {
    resultadoController.obterNumeroVotos(req, res);
});

module.exports = router;