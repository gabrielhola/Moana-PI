var database = require("../database/config")

// Criação da query para inserir a cpntribuição no banco de dados  31/01/25
function contribuir(fkUsuario, conteudo, dataFormatada) {
    console.log("Contribuição: ", fkUsuario, conteudo, dataFormatada)

    var instrucaoSql = `
        insert into contribuicao(fkUsuario, conteudo, data_contribuicao) values ('${fkUsuario}', '${conteudo}', '${dataFormatada}');
    `;
    return database.executar(instrucaoSql);
}

// Criação da query para obter o nome do usuario, conteudo da contribuição e data para exibí-la na página  31/01/25
function exibirContribuicao() {

    var instrucaoSql = `
        select nome, conteudo, data_contribuicao from contribuicao
        join usuario
        on fkUsuario = idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


// Criação da query para obter os 5 usuários mais ativos do site 31/01/25
function obterUsuariosContribuicao() {

    var instrucaoSql = `
        select nome, count(fkUsuario) as 'Total de contribuições' from contribuicao
        join usuario 
        on fkUsuario = idUsuario
        group by nome
        limit 5;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    contribuir,
    exibirContribuicao,
    obterUsuariosContribuicao
}