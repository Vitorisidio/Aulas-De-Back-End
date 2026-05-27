const knex = require('knex')

const knexConfig = require('../../database_config_knex/knexFile.js')

const knexConex = knex(knexConfig.development)

const insertDiretor = async function (diretor) {

    try {
        let sql = `insert into tbl_diretor (
                                    nome,
                                    biografia,
                                    foto,
                                    data_nascimento
                                    )
                    values(
                            '${diretor.nome}',
                            '${diretor.biografia}',
                            '${diretor.foto}',
                            '${diretor.data_nascimento}'
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

const selectAllDiretor = async function () {
    try {
        let sql = 'select * from tbl_diretor order by id'

        let result = await knexConex.raw(sql)

        if (Array.isArray(result)) {
            return result[0]
        } else {
            return false
        }
    } catch (error) {

    }
}

const selectByIdDiretor = async function (id) {

    try {
        let sql = `select * from tbl_diretor where id=${id}`

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

const updateDiretor = async function (diretor) {

    try {
        let sql = `update tbl_diretor set
                nome = '${diretor.nome}',
                biografia = '${diretor.biografia}',
                foto = '${diretor.foto}',
                data_nascimento = '${diretor.data_nascimento}'
                where id = ${diretor.id}`
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

const deleteDiretor = async function (id) {

    try {
        let sql = `delete from tbl_diretor where id=${id}`

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
    insertDiretor,
    selectAllDiretor,
    selectByIdDiretor,
    updateDiretor,
    deleteDiretor
}