const knex = require('knex')

const knexConfig = require('../../database_config_knex/knexFile.js')

const knexConex = knex(knexConfig.development)

const insertNacionalidade = async function (nacionalidade) {

    try {
        let sql = `insert into tbl_nacionalidade (
                                    sigla,
                                    nome_pais,
                                    continente
                                    )
                    values(
                            '${nacionalidade.sigla}',
                            '${nacionalidade.nome_pais}',
                            '${nacionalidade.continente}'
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

const selectAllNacionalidade = async function () {
    try {
        let sql = 'select * from tbl_nacionalidade order by id'

        let result = await knexConex.raw(sql)

        if (Array.isArray(result)) {
            return result[0]
        } else {
            return false
        }
    } catch (error) {

    }
}

const selectByIdNacionalidade = async function (id) {

    try {
        let sql = `select * from tbl_nacionalidade where id=${id}`

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

const updateNacionalidade = async function (nacionalidade) {

    try {
        let sql = `update tbl_nacionalidade set
                sigla = '${nacionalidade.sigla}',
                nome_pais = '${nacionalidade.nome_pais}',
                continente = '${nacionalidade.continente}'
                where id = ${nacionalidade.id}`
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

const deleteNacionalidade = async function (id) {

    try {
        let sql = `delete from tbl_nacionalidade where id=${id}`

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
    insertNacionalidade,
    selectAllNacionalidade,
    selectByIdNacionalidade,
    updateNacionalidade,
    deleteNacionalidade
}