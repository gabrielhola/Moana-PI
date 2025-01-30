var database = require("../database/config")

function votar(fkUsuario, fkPraia) {
    console.log("Votação: ", fkUsuario, fkPraia)

    var instrucaoSql = `
        insert into resultado_votacao(fkUsuario, fkPraia) values ('${fkUsuario}', '${fkPraia}');
    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    votar
}