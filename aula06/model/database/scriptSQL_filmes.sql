create database db_filmes_2026_1_a;

use db_filmes_2026_1_a;

create table tbl_filme(
	id int not null primary key auto_increment,
    nome varchar(80) not null,
    data_lancamento date not null,
    duracao time not null,
    sinopse text not null,
    avalicao decimal(3,2) default null,
    valor decimal(5,2) default null,
    capa varchar(255)
);

show tables;

#inserir dados
insert into tbl_filme (
						nome,
						data_lancamento,
                        duracao, 
                        sinopse, 
                        avaliacao, 
                        valor, 
                        capa
                        )
values (
		'Super Mario Galaxy: O Filme',
        '2026-04-02',
        '01:39:00',
        'Uma nova aventura leva Mario a enfrentar um inédito e ameaçador super vilão.
        Em Super Mario Galaxy: O Filme, o bigodudo encanador italiano e seus aliados
        embarcam numa aventura galáctica repleta de ação e momentos emocionantes depois de salvar o Reino dos Cogumelos',
        '3',
        '50.70',
        'https://br.web.img3.acsta.net/c_310_420/img/5b/ea/5bea1aeac3323aeaaf82449a34fafbbf.jpg'
        );
        
select * from tbl_filme order by id desc;

delete from tbl_filme where id = 23;

alter table tbl_filme
	change column avalicao avaliacao decimal(3,2) default null;
        
        update tbl_filme set
			nome = 'filme 02',
            data_lancamento = '2000-01-01',
            duracao = '02:00',
            sinopse = 'Testando o update no banco de dados',
            avaliacao = '2',
            valor = '10',
            capa = 'teste capa'
            where id = 22;
        
        
#SCRIPT ATIVIDADE------------------------------------------------------------------

create table tbl_atividade(
id int not null primary key auto_increment,
nome varchar(80) not null
);

show tables;

insert into tbl_atividade (
						nome
                        )
values('produtor Executivo'),
		('Diretor'),
		('Ator');

select * from tbl_atividade;

delete from tbl_atividade where id = 1;

        update tbl_atividade set
			nome = 'dublador' where id = 3;       
            
            
            
            
#SCRIPT GENERO---------------------------------------------------------------------------

create table tbl_genero(
id int not null primary key auto_increment,
nome_genero varchar(80) not null
);

insert into tbl_genero (
						nome_genero
                        )
values('Comédia'),
		('Terror'),
		('Romance'),
		('Drama'),
		('Suspense'),
		('ação');
        
select * from tbl_genero;

delete from tbl_genero where id = 1;

        update tbl_genero set
			nome_genero = 'Romance' where id = 3;
            
#SCRIPT CLASSIFICAÇÃO------------------------------------------------------------

create table tbl_classificacao(
	id int not null auto_increment primary key,
    sigla varchar(5) not null,
    nome varchar(50) not null,
    caracteristica text not null
);

insert into tbl_classificacao (
									sigla,
                                    nome,
                                    caracteristica
                                    )
values(
		'L',
		'Livre',
		'Livre para todos os públicos'
        ),
        (
		'10',
		'maior de 10 anos',
		'conteúdo sensivel para menores de 10 anos'
        );

select * from tbl_classificacao;

delete from tbl_classificacao where id = 1;

        update tbl_classificacao set
			sigla = 'L' where id = 1;
            
            
#SCRIPT NACIONALIDADE--------------------------------------------------------

create table tbl_nacionalidade(
	id int not null auto_increment primary key,
    sigla varchar(5) not null,
    nome_pais varchar(85) not null,
    continente  varchar(85)
);

insert into tbl_nacionalidade (
									sigla,
                                    nome_pais,
                                    continente
                                    )
values(
		'BR',
		'Brasil',
		'Americano'
        );

select * from tbl_nacionalidade;

delete from tbl_nacionalidade where id = 1;

        update tbl_nacionalidade set
			sigla = 'br' where id = 1;