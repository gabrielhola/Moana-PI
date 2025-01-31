var database = require("../database/config")

function obterUsuariosNaoPraia() {

    var instrucaoSql = `
        select round((count(case when visitou_praia = 0 then visitou_praia end) * 100) / count(visitou_praia), 2) as 'Nunca foram à praia' from usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterUsuariosSimPraia() {

    var instrucaoSql = `
        select round((count(case when visitou_praia = 1 then visitou_praia end) * 100) / count(visitou_praia), 2) as 'Já foram à praia' from usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterUsuariosNaoPraia,
    obterUsuariosSimPraia
}