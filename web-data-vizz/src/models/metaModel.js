var database = require("../database/config")

function registrarMeta(dtInicio, dtFinal, totalDia) {
    console.log("ACESSEI O META MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarMeta():", dtInicio, dtFinal, totalDia);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO meta (dtInicio, dtFinal, totalDia) VALUES ('${dtInicio}', '${dtFinal}', '${totalDia}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    registrarMeta
}