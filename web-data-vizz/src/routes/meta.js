var express = require("express");
var router = express.Router();

var metaController = require("../controllers/metaController");

//Recebendo os dados do html e direcionando para a função registrarMeta de metaController.js
router.post("/registrarMeta", function (req, res) {
    metaController.registrarMeta(req, res);
})

module.exports = router;