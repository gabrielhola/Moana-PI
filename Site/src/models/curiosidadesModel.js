var database = require("../database/config")

// query que pega o percentual dos usuários que nunca foram à praia 31/01/25
function obterUsuariosNaoPraia() {

    var instrucaoSql = `
        select round((count(case when visitou_praia = 0 then visitou_praia end) * 100) / count(visitou_praia), 0) as 'Nunca foram à praia' from usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// query que pega o percentual dos usuários que já foram à praia 31/01/25
function obterUsuariosSimPraia() {

    var instrucaoSql = `
        select round((count(case when visitou_praia = 1 then visitou_praia end) * 100) / count(visitou_praia), 0) as 'Já foram à praia' from usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterUsuariosNaoPraia,
    obterUsuariosSimPraia
}