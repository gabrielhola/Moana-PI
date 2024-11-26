CREATE DATABASE moana;

USE moana;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(254),
	senha CHAR(50),
    fkPraia int,
    constraint fkPraiaUsuario foreign key (fkPraia)
    references praia(idPraia)
);

select * from usuario;

truncate usuario;

CREATE TABLE praia (
idPraia int primary key auto_increment,
nome varchar(45),
qtdVotos int
);


select * from votacao;


select nome, qtdVotos from praia
order by qtdVotos desc;

insert into praia values
(default, 'Bora Bora - Polinésia Francesa', 0),
(default, 'Praia da Conceição - Fernando de Noronha', 0),
(default, 'Praia Preta - São Sebastião', 0),
(default, 'Praia do Farol - Arraial do Cabo', 0),
(default, 'Baía dos Porcos - Fernando de Noronha', 0);

select nome, qtdVotos from praia
order by qtdVotos desc;

truncate praia;



