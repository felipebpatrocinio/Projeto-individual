var metaModel = require("../models/metaModel");

function registrarMeta(req, res) {
    var dtInicio= req.body.dtInicioServer;
    var dtFinal = req.body.dtFinalServer;
    var totalDia = req.body.totalDiaServer;
    var fkUsuario = req.body.fkUsuarioServer;

    if (dtInicio == undefined) {
        res.status(400).send("A data de início está indefinida!");
    } else if (dtFinal == undefined) {
        res.status(400).send("A data final está indefinido!");
    } else if (totalDia == undefined) {
        res.status(400).send("O total de dia está indefinido!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("O usuário está indefinido!");
    } else {

        metaModel.registrarMeta(dtInicio, dtFinal, totalDia, fkUsuario)
            .then(
                function (resultadoRegistrarMeta) {
                    console.log(`\nResultados encontrados: ${resultadoRegistrarMeta.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoRegistrarMeta)}`); // transforma JSON em String

                    if (resultadoRegistrarMeta.length == 1) {
                        console.log(resultadoRegistrarMeta);
                        
                    } else if (resultadoRegistrarMeta.length == 0) {
                        res.status(403).send("Registro(s) inválido(s)");
                    } else {
                        res.status(403).send("Não foi encontrado esse usuário.");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o registro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function buscarMetasPorUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    metaModel.buscarMetasPorUsuario(idUsuario).then((resultado) => {
        if (resultado.length >= 0) {
            res.status(200).send(resultado[0])

        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as metas: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    registrarMeta,
    buscarMetasPorUsuario
}