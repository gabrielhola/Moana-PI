var database = require("../database/config")

function mostrarResultado(nome, qtdVotos) {

    var instrucaoSql = `
        SELECT nome, qtdVotos FROM praia WHERE idPraia = '${idPraia}';
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    mostrarResultado
}