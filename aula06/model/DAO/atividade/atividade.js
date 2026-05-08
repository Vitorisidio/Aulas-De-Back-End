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
const insertAtividade = async function (atividade) {


    try {
        let sql = `insert into tbl_atividade (nome)
                    values(
                    '${atividade.nome}'
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

//Função para atualizar um filme existente na tabela
const updateAtividade = async function (atividade) {
    //script para  atualizar o BD
    try {
        let sql = `update tbl_atividade set
                nome = '${atividade.nome}'
                where id = ${atividade.id}`
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

//Função para retornar todos os dados da tabela de filme
const selectAllAtividade = async function () {

}

// Função para retorna os dados do filme filtrando pelo ID
const selectByIdAtividade = async function () {

}

const deleteAtividade = async function () {

}

module.exports = {
    insertAtividade,
    updateAtividade,
    selectAllAtividade,
    selectByIdAtividade,
    deleteAtividade
}