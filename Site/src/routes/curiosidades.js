var express = require("express");
var router = express.Router();

var curiosidadesController = require("../controllers/curiosidadesController");

// Pega os dados do banco de dados dos usuarios que nunca foram à praia 31/01/25
router.get("/obterUsuariosNaoPraia", function (req, res) {
    curiosidadesController.obterUsuariosNaoPraia(req, res);
});

// Pega os dados do banco de dados dos usuarios que já foram à praia 31/01/25
router.get("/obterUsuariosSimPraia", function (req, res) {
    curiosidadesController.obterUsuariosSimPraia(req, res);
});

module.exports = router;