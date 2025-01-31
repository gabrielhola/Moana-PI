var database = require("../database/config")

function contribuir(fkUsuario, conteudo, dataFormatada) {
    console.log("Contribuição: ", fkUsuario, conteudo, dataFormatada)

    var instrucaoSql = `
        insert into contribuicao(fkUsuario, conteudo, data_contribuicao) values ('${fkUsuario}', '${conteudo}', '${dataFormatada}');
    `;
    return database.executar(instrucaoSql);
}

function exibirContribuicao() {

    var instrucaoSql = `
        select nome, conteudo, data_contribuicao from contribuicao
        join usuario
        on fkUsuario = idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function obterUsuariosContribuicao() {

    var instrucaoSql = `
        select nome, count(fkUsuario) as 'Total de contribuições' from contribuicao
        join usuario 
        on fkUsuario = idUsuario
        group by nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    contribuir,
    exibirContribuicao,
    obterUsuariosContribuicao
}