const config_message = require('../modulo/configMessages.js')

const filmeDiretorDAO = require('../../model/DAO/filme_diretor/filme_diretor.js')

const inserirNovoFilmeDiretor = async function (filmeDiretor) {

    let message = JSON.parse(JSON.stringify(config_message))

    try {
        let validar = await validarDados(filmeDiretor)

        if (validar) {
            return validar
        } else {
            let result = await filmeDiretorDAO.insertFilmeDiretor(filmeDiretor)
            if (result) { //status code 201

                filmeDiretor.id = result

                message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                message.DEFAULT_MESSAGE.response = filmeDiretor
            } else {//status code 500
                return message.ERROR_INTERNAL_SERVER_MODEL //Erro 500 model
            }
            return message.DEFAULT_MESSAGE
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER// ERRO 500 controller
    }
}

const validarDados = async function (filmeDiretor) {
    let message = JSON.parse(JSON.stringify(config_message))

    if (filmeDiretor.id_filme == undefined || filmeDiretor.id_filme == '' || filmeDiretor.id_filme == null || isNaN(filmeDiretor.id_filme)) {
        message.ERROR_BAD_REQUEST.field = '[ID_FILME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400
    } else if (filmeDiretor.id_diretor == undefined || filmeDiretor.id_diretor == '' || filmeDiretor.id_diretor == null || isNaN(filmeDiretor.id_diretor)) {
        message.ERROR_BAD_REQUEST.field = '[ID_DIRETOR] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400
    } else {
        return false
    }

}

const listarFilmeDiretor = async function () {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        let result = await filmeDiretorDAO.selectAllFilmeDiretor()

        if (result) {
            if (result.length > 0) {
                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.filme_diretor = result

                return message.DEFAULT_MESSAGE //200 (Dados do Filme)

            } else {
                return message.ERROR_NOT_FOUND //404
            }
        } else {
            return message.ERROR_INTERNAL_SERVER_MODEL //500(model)
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500(controller)
    }
}

const buscarFilmeDiretor = async function (id) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (id == undefined || id == '' || id == null || isNaN(id)) {
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await filmeDiretorDAO.selectByIdFilmeDiretor(id)

            if (result) {
                if (result.length > 0) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme_diretor = result

                    return message.DEFAULT_MESSAGE//200
                } else {
                    return message.ERROR_NOT_FOUND//404
                }
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL//500(model)
            }
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

const buscarFilmeIdDiretor = async function (idDiretor) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (idDiretor == undefined || idDiretor == '' || idDiretor == null || isNaN(idDiretor)) {
            message.ERROR_BAD_REQUEST.field = '[ID_DIRETOR] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await filmeDiretorDAO.selectFilmesByIdDiretor(idDiretor)

            if (result) {
                if (result.length > 0) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme_diretor = result

                    return message.DEFAULT_MESSAGE//200
                } else {
                    return message.ERROR_NOT_FOUND//404
                }
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL//500(model)
            }
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

const buscarDiretorIdFilme = async function (idFilme) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (idFilme == undefined || idFilme == '' || idFilme == null || isNaN(idFilme)) {
            message.ERROR_BAD_REQUEST.field = '[ID_DIRETOR] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await filmeDiretorDAO.selectDiretoresByIdFilmes(idFilme)

            if (result) {
                if (result.length > 0) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme_diretor = result

                    return message.DEFAULT_MESSAGE//200
                } else {
                    return message.ERROR_NOT_FOUND//404
                }
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL//500(model)
            }
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500
    }

}

const atualizarFilmeDiretor = async function (filmeDiretor, id) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {

        //validação para o ID incorreto
        let resultBuscarID = await buscarFilmeDiretor(id)

        if (resultBuscarID.status) {
            let validar = await validarDados(filmeDiretor)

            if (!validar) {
                filmeDiretor.id = id

                let result = await filmeDiretorDAO.updateFilmeDiretor(filmeDiretor)

                if (result) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_UPDATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_UPDATED_ITEM.message
                    message.DEFAULT_MESSAGE.response = filmeDiretor

                    return message.DEFAULT_MESSAGE //200

                } else {
                    return message.ERROR_INTERNAL_SERVER_MODEL //500
                }

            } else {
                return validar //400
            }
        } else {
            return resultBuscarID // 400 ou 404 ou 500
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER//500(model)
    }

}

const excluirFilmeDiretor = async function (id) {
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        let resultBuscarID = await buscarFilmeDiretor(id)

        if (resultBuscarID.status) {
            let result = await filmeDiretorDAO.deleteFilmeDiretor(id)

            if (result) {
                return message.SUCCESS_DELETE_ITEM //200(Registro excluido)
            } else {
                return message.ERROR_INTERNAL_SERVER_MODEL
            }
        } else {
            return resultBuscarID //404 ou 400
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER//500(controller)
    }


}

//função para excluir os generos relacionados com o filme
const excluirDiretoresIdFilme = async function (idFilme) {
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        let result = await filmeDiretorDAO.deleteDiretoresByIdFilme(idFilme)

        if (result) {
            return message.SUCCESS_DELETE_ITEM //200(Registro excluido)
        } else {
            return message.ERROR_INTERNAL_SERVER_MODEL
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER//500(controller)
    }


}

module.exports = {
    inserirNovoFilmeDiretor,
    validarDados,
    listarFilmeDiretor,
    buscarFilmeDiretor,
    buscarFilmeIdDiretor,
    buscarDiretorIdFilme,
    atualizarFilmeDiretor,
    excluirFilmeDiretor,
    excluirDiretoresIdFilme
}