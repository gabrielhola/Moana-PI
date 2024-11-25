-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE moana;

USE moana;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(254),
	senha CHAR(50)
);

CREATE TABLE praia (
idPraia int primary key auto_increment,
nome varchar(45),
qtdVotos int
);

insert into praia values
(default, 'Bora Bora - Polinésia Francesa', 0),
(default, 'Praia da Conceição - Fernando de Noronha', 0),
(default, 'Praia Preta - São Sebastião', 0),
(default, 'Praia do Farol - Arraial do Cabo', 0),
(default, 'Baía dos Porcos - Fernando de Noronha', 0);