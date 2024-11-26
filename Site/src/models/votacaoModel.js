var database = require("../database/config")

function votar(idPraia) {

    var instrucaoSql = `
        UPDATE praia SET qtdVotos = qtdVotos + 1 WHERE idPraia = '${idPraia}';
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    votar
}