create database moana_bd;
use moana_bd;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar (255),
email varchar(100),
senha varchar (100),
visitou_praia tinyint
);

create table praia (
idPraia int primary key auto_increment,
nome varchar (100),
localizacao varchar (100)
);

insert into praia values
(default, 'Bora Bora', 'Polinésia Francesa'),
(default, 'Praia da Conceição', 'Fernando de Noronha'),
(default, 'Praia Preta', 'São Sebastião'),
(default, 'Praia do Farol', 'Arraial do Cabo'),
(default, 'Baía dos Porcos', 'Fernando de Noronha');

select * from praia;

create table resultado_votacao (
fkUsuario int,
fkPraia int,
constraint fkResultadoUsuario foreign key (fkUsuario)
references usuario(idUsuario),
constraint fkResultadoPraia foreign key (fkPraia)
references praia(idPraia),
constraint pkResultado primary key (fkUsuario, fkPraia)
);

create table contribuicao (
idContribuicao int primary key auto_increment,
fkUsuario int,
constraint fkContribuicaoUsuario foreign key (fkUsuario)
references usuario(idUsuario),
data_contribuicao date
);