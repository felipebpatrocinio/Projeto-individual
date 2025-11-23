var database = require("../database/config")

function registrarMeta(dtInicio, dtFinal, totalDia, fkUsuario) {
    console.log("ACESSEI O META MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarMeta():", dtInicio, dtFinal, totalDia, fkUsuario);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO meta (dtInicio, dtFinal, totalDia, fkUsuario) VALUES ('${dtInicio}', '${dtFinal}', '${totalDia}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMetasPorUsuario(idUsuario) {

  var instrucaoSql = `SELECT SUM(totalDia) as totalMeta, MAX(DATE(dtFinal)) as dtFinal FROM meta WHERE fkUsuario = ${idUsuario};`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
} 

module.exports = {
    registrarMeta,
    buscarMetasPorUsuario
}