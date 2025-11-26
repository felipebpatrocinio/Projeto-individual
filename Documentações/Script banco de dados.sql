CREATE DATABASE violinStudy;

USE violinStudy;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(45),
sobrenome VARCHAR(60),
email VARCHAR(60),
nivel VARCHAR(45),
senha VARCHAR(45)
);

CREATE TABLE estudo (
idEstudo INT PRIMARY KEY AUTO_INCREMENT,
dtEstudo DATE,
tempoEstudo INT,
dificuldade VARCHAR(45),
fkUsuario INT,
FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario)
);

CREATE TABLE meta (
idMeta INT PRIMARY KEY AUTO_INCREMENT,
dtInicio DATE,
dtFinal DATE,
totalDia INT,
fkUsuario INT,
FOREIGN KEY (fkUsuario)
REFERENCES usuario(idUsuario)
);

SELECT * FROM usuario;
SELECT * FROM estudo;
SELECT * FROM meta;
    

