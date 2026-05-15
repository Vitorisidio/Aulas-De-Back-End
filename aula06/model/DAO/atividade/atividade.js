const knex = require('knex')

const knexConfig = require('../../database_config_knex/knexFile.js')

const knexConex = knex(knexConfig.development)

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

const selectAllAtividade = async function () {
    try {
        //Script para retornar todas as atividades
        let sql = 'select * from tbl_atividade order by id desc'

        //Executa no banco de dados o script SQL para retornar as atividades
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

const selectByIdAtividade = async function (id) {

    try {
        let sql = `select * from tbl_atividade where id=${id}`

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

const deleteAtividade = async function (id) {

    try {
        let sql = `delete from tbl_atividade where id=${id}`

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
    insertAtividade,
    updateAtividade,
    selectAllAtividade,
    selectByIdAtividade,
    deleteAtividade
}