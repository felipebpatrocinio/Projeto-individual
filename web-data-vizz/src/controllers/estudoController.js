var estudoModel = require("../models/estudoModel");

function registrarEstudo(req, res) {
    var dtEstudo = req.body.dtEstudoServer;
    var tempoEstudo = req.body.tempoEstudoServer;
    var dificuldade = req.body.dificuldadeServer;

    if (dtEstudo == undefined) {
        res.status(400).send("A data de estudo está indefinida!");
    } else if (tempoEstudo == undefined) {
        res.status(400).send("O tempo de estudo está indefinido!");
    } else if (dificuldade == undefined) {
        res.status(400).send("A dificuldade está indefinida!");
    } else {

        estudoModel.registrarEstudo(dtEstudo, tempoEstudo, dificuldade)
            .then(
                function (resultadoRegistrarEstudo) {
                    console.log(`\nResultados encontrados: ${resultadoRegistrarEstudo.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoRegistrarEstudo)}`); // transforma JSON em String

                    if (resultadoRegistrarEstudo.length == 1) {
                        console.log(resultadoRegistrarEstudo);

                        /* aquarioModel.buscarAquariosPorEmpresa(resultadoRegistrarEstudo[0].idUsuario)
                            .then((resultadoAquarios) => {
                                if (resultadoAquarios.length >= 0) {
                                    res.json({
                                        idUsuario: resultadoRegistrarEstudo[0].idUsuario,
                                        email: resultadoRegistrarEstudo[0].email,
                                        nome: resultadoRegistrarEstudo[0].nome,
                                        senha: resultadoRegistrarEstudo[0].senha,
                                        //aquarios: resultadoAquarios
                                    });
                                } else {
                                    res.status(204).json({ aquarios: [] });
                                }
                            })
                        */
                        
                    } else if (resultadoRegistrarEstudo.length == 0) {
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

module.exports = {
    registrarEstudo
}