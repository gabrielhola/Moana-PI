CREATE DATABASE moana;

USE moana;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(254),
	senha CHAR(50)
);