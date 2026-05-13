/*------------------------------------------------------------
* Objetivo: Arquivo responsável pelo CRUD no Banco de dados MySQL na tabela filme
* Data: 15/04/2026
* Autor: Vitor
* Versão: 1.0
------------------------------------------------------------*/
//Import da biblioteca para gerenciar o banco de dados Mysql no node.JS
const knex = require('knex')

//import do arquivo de configuração para conexão com BD Mysql
const knexConfig = require('../../database_config_knex/knexFile.js')

//Criar a conexão com o BD Mysql
const knexConex = knex(knexConfig.development)

//Função para inserir dados na tabela de filme
const insertGenero = async function (genero) {


    try {
        let sql = `insert into tbl_genero (nome_genero)
                    values(
                    '${genero.nome_genero}'
                    );`

    let result = await knexConex.raw(sql)
    
    if (result) {
        return result[0].insertId //retorna o ID gerado 
    } else {
        return false
    }

    } catch (error) {
        return false
    }

}


//Função para retornar todos os dados da tabela de filme
const selectAllGenero = async function () {
    try {
        //Script para retornar todos os filmes
        let sql = 'select * from tbl_genero order by id'

        //Executa no banco de dados o script SQL para retornar os filmes
        let result = await knexConex.raw(sql)

        //Validação para verificar se o retorno no BD é um array
        //Se o scriptSQL der erro, o banco não devolve um array
        if (Array.isArray(result)) {
            return result[0]
        } else {
            return false
        }
    } catch (error) {

    }
}


// Função para retorna os dados do filme filtrando pelo ID
const selectByIdGenero = async function (id) {

    try {
        let sql = `select * from tbl_genero where id=${id}`

        let result = await knexConex.raw(sql)

        if (Array.isArray(result)) {
            return result[0]
        } else {
            return false
        }

    } catch (error) {
        return false
    }

}

//Função para atualizar um filme existente na tabela
const updateGenero = async function (genero) {

    try {
        let sql = `update tbl_genero set
                nome_genero = '${genero.nome_genero}'
                where id = ${genero.id}`
        //executa o script SQL no BD
        let result = await knexConex.raw(sql)
    
        if (result) {
            return true
        } else {
            return false
        }
        
    } catch (error) {
        return false
    }
}


const deleteGenero = async function (id) {

    try {
        let sql = `delete from tbl_genero where id=${id}`

        let result = await knexConex.raw(sql)

        if (result) {
            return true
        } else {
            return false
        }

    } catch (error) {
        return false
    }

}

module.exports = {
    insertGenero,
    selectAllGenero,
    selectByIdGenero,
    updateGenero,
    deleteGenero
}