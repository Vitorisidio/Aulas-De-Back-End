const knex = require('knex')

const knexConfig = require('../../database_config_knex/knexFile.js')

const knexConex = knex(knexConfig.development)

const insertClassificacao = async function (classificacao) {

    try {
        let sql = `insert into tbl_classificacao (
									sigla,
                                    nome,
                                    caracteristica
                                    )
                    values(
		                    '${classificacao.sigla}',
		                    '${classificacao.nome}',
		                    '${classificacao.caracteristica}'
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

const selectAllClassificacao = async function () {
    try {
        let sql = 'select * from tbl_classificacao order by id'

        let result = await knexConex.raw(sql)

        if (Array.isArray(result)) {
            return result[0]
        } else {
            return false
        }
    } catch (error) {

    }
}

const selectByIdClassificacao = async function (id) {

    try {
        let sql = `select * from tbl_classificacao where id=${id}`

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

module.exports = {
    insertClassificacao,
    selectAllClassificacao,
    selectByIdClassificacao,
}