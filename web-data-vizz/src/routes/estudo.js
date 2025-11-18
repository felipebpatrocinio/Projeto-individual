var express = require("express");
var router = express.Router();

var estudoController = require("../controllers/estudoController");

//Recebendo os dados do html e direcionando para a função registrarEstudo de estudoController.js
router.post("/registrarEstudo", function (req, res) {
    estudoController.registrarEstudo(req, res);
})

router.get("/:idUsuario", function (req, res) {
  estudoControllerController.buscarEstudosPorUsuario(req, res);
});

module.exports = router;