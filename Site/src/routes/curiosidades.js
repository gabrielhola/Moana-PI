var express = require("express");
var router = express.Router();

var curiosidadesController = require("../controllers/curiosidadesController");

router.get("/obterUsuariosNaoPraia", function (req, res) {
    curiosidadesController.obterUsuariosNaoPraia(req, res);
});

router.get("/obterUsuariosSimPraia", function (req, res) {
    curiosidadesController.obterUsuariosSimPraia(req, res);
});

module.exports = router;