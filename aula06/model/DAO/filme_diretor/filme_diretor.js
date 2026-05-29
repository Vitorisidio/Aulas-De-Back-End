const knex = require('knex')

const knexConfig = require('../../database_config_knex/knexFile.js')

const knexConex = knex(knexConfig.development)

const insertFilmeDiretor = async function (filmeDiretor) {


    try {
        let sql = `insert into tbl_filme_diretor (id_filme, id_diretor)
                    values(
                    ${filmeDiretor.id_filme},
                    ${filmeDiretor.id_diretor}
                    )`

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

const selectAllFilmeDiretor = async function () {
    try {
        
        let sql = 'select * from tbl_filme_diretor order by id'

        let result = await knexConex.raw(sql)

        if (Array.isArray(result)) {
            return result[0]
        } else {
            return false
        }
    } catch (error) {

    }
}

const selectByIdFilmeDiretor = async function (id) {

    try {
        let sql = `select * from tbl_filme_diretor where id=${id}`

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

const selectFilmesByIdDiretor = async function (idDiretor) {

    try {
        let sql =   `select tbl_filme. *
                        from tbl_filme
                            inner join tbl_filme_diretor 
                                on tbl_filme.id = tbl_filme_diretor.id_filme
                            inner join tbl_diretor
                                on tbl_diretor.id = tbl_filme_diretor.id_diretor
                    where tbl_diretor.id=${idDiretor}`

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

const selectDiretoresByIdFilmes = async function (idFilme) {

    try {
        let sql =   `select tbl_diretor. *
                        from tbl_filme
                            inner join tbl_filme_diretor 
                                on tbl_filme.id = tbl_filme_diretor.id_filme
                            inner join tbl_diretor
                                on tbl_diretor.id = tbl_filme_diretor.id_diretor
                    where tbl_filme.id=${idFilme}`

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

const updateFilmeDiretor = async function (filmeDiretor) {

    try {
        let sql = `update tbl_filme_diretor set
                id_filme = ${filmeDiretor.id_filme},
                id_diretor = ${filmeDiretor.id_diretor}
                where id = ${filmeDiretor.id}`
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

const deleteFilmeDiretor = async function (id) {

    try {
        let sql = `delete from tbl_filme_diretor where id=${id}`

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

const deleteDiretoresByIdFilme = async function (idFilme) {

    try {
        let sql = `delete from tbl_filme_diretor where id_filme=${idFilme}`
console.log(sql)
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
    insertFilmeDiretor,
    selectAllFilmeDiretor,
    selectByIdFilmeDiretor,
    selectFilmesByIdDiretor,
    selectDiretoresByIdFilmes,
    updateFilmeDiretor,
    deleteFilmeDiretor,
    deleteDiretoresByIdFilme
}