const knex = require('knex')

const knexConfig = require('../../database_config_knex/knexFile.js')

const knexConex = knex(knexConfig.development)

const insertAtor = async function (ator) {

    try {
        let sql = `insert into tbl_ator (
                                    nome,
                                    biografia,
                                    foto,
                                    data_nascimento
                                    )
                    values(
                            '${ator.nome}',
                            '${ator.biografia}',
                            '${ator.foto}',
                            '${ator.data_nascimento}'
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

const selectAllAtor = async function () {
    try {
        let sql = 'select * from tbl_ator order by id'

        let result = await knexConex.raw(sql)

        if (Array.isArray(result)) {
            return result[0]
        } else {
            return false
        }
    } catch (error) {

    }
}

const selectByIdAtor = async function (id) {

    try {
        let sql = `select * from tbl_Ator where id=${id}`

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

const updateAtor = async function (ator) {

    try {
        let sql = `update tbl_ator set
                nome = '${ator.nome}',
                biografia = '${ator.biografia}',
                foto = '${ator.foto}',
                data_nascimento = '${ator.data_nascimento}'
                where id = ${ator.id}`
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

const deleteAtor = async function (id) {

    try {
        let sql = `delete from tbl_ator where id=${id}`

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
    insertAtor,
    selectAllAtor,
    selectByIdAtor,
    updateAtor,
    deleteAtor
}