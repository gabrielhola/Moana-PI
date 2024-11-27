var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/mostrarResultado", function (req, res) {
    resultadoController.mostrarResultado(req, res);
})

router.get("/mostrarResultado", function (req, res) {
    resultadoController.mostrarResultado(req, res);
});

module.exports = router;