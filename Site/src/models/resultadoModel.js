var database = require("../database/config")

function obterDados() {

    var instrucaoSql = `
        select nome, count(fkPraia) as 'Total de Votos' from praia
        join resultado_votacao
        on fkPraia = idPraia
        group by nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterPraiaMaisVotos() {
    var instrucaoSql = `
        select nome, count(fkPraia) as 'Total de Votos' from praia
        join resultado_votacao
        on fkPraia = idPraia
        group by nome
        order by count(fkPraia) desc
        limit 1;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterPraiaMenosVotos() {
    var instrucaoSql = `
        select nome, count(fkPraia) as 'Total de Votos' from praia
        join resultado_votacao
        on fkPraia = idPraia
        group by nome
        order by count(fkPraia)
        limit 1;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterNumeroVotos() {
    var instrucaoSql = `
        select count(fkPraia) as total from resultado_votacao;
     `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDados,
    obterPraiaMaisVotos,
    obterPraiaMenosVotos,
    obterNumeroVotos,
}