const config_message = require('../modulo/configMessages.js')

const filmeGeneroDAO = require('../../model/DAO/filme_genero/filme_genero.js')

const inserirNovoFilmeGenero = async function (filmeGenero) {

    let message = JSON.parse(JSON.stringify(config_message))

    try {
        let validar = await validarDados(filmeGenero)

        if (validar) {
            return validar
        } else {
            let result = await filmeGeneroDAO.insertFilmeGenero(filmeGenero)
            if (result) { //status code 201

                filmeGenero.id = result

                message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                message.DEFAULT_MESSAGE.response = filmeGenero
            } else {//status code 500
                return message.ERROR_INTERNAL_SERVER_MODEL //Erro 500 model
            }
            return message.DEFAULT_MESSAGE
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER// ERRO 500 controller
    }
}

const validarDados = async function (filmeGenero) {
    let message = JSON.parse(JSON.stringify(config_message))

    if (filmeGenero.id_filme == undefined || filmeGenero.id_filme == '' || filmeGenero.id_filme == null || isNaN(filmeGenero.id_filme)) {
        message.ERROR_BAD_REQUEST.field = '[ID_FILME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400
    } else if (filmeGenero.id_genero == undefined || filmeGenero.id_genero == '' || filmeGenero.id_genero == null || isNaN(filmeGenero.id_genero)) {
        message.ERROR_BAD_REQUEST.field = '[ID_GENERO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400
    } else {
        return false
    }

}

const listarFilmeGenero = async function () {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        let result = await filmeGeneroDAO.selectAllFilmeGenero()

        if (result) {
            if (result.length > 0) {
                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.filme_genero = result

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

const buscarFilmeGenero = async function (id) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (id == undefined || id == '' || id == null || isNaN(id)) {
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await filmeGeneroDAO.selectByIdFilmeGenero(id)

            if (result) {
                if (result.length > 0) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme_genero = result

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

const buscarFilmeIdGenero = async function (idGenero) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (idGenero == undefined || idGenero == '' || idGenero == null || isNaN(idGenero)) {
            message.ERROR_BAD_REQUEST.field = '[ID_GENERO] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await filmeGeneroDAO.selectFilmesByIdGenero(idGenero)

            if (result) {
                if (result.length > 0) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme_genero = result

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

const buscarGeneroIdFilme = async function (idFilme) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (idFilme == undefined || idFilme == '' || idFilme == null || isNaN(idFilme)) {
            message.ERROR_BAD_REQUEST.field = '[ID_GENERO] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await filmeGeneroDAO.selectGenerosByIdFilmes(idFilme)

            if (result) {
                if (result.length > 0) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme_genero = result

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

const atualizarFilmeGenero = async function (filmeGenero, id) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {

        //validação para o ID incorreto
        let resultBuscarID = await buscarFilmeGenero(id)

        if (resultBuscarID.status) {
            let validar = await validarDados(filmeGenero)

            if (!validar) {
                filmeGenero.id = id

                let result = await filmeGeneroDAO.updateFilmeGenero(filmeGenero)

                if (result) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_UPDATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_UPDATED_ITEM.message
                    message.DEFAULT_MESSAGE.response = filmeGenero

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

const excluirFilmeGenero = async function (id) {
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        let resultBuscarID = await buscarFilmeGenero(id)

        if (resultBuscarID.status) {
            let result = await filmeGeneroDAO.deleteFilmeGenero(id)

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


module.exports = {
    inserirNovoFilmeGenero,
    validarDados,
    listarFilmeGenero,
    buscarFilmeGenero,
    buscarFilmeIdGenero,
    buscarGeneroIdFilme,
    atualizarFilmeGenero,
    excluirFilmeGenero
}