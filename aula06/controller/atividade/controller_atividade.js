const config_message = require('../modulo/configMessages.js')

const atividadeDAO = require('../../model/DAO/atividade/atividade.js')

const inserirNovaAtividade = async function (atividade, contentType) {
    let message = JSON.parse(JSON.stringify(config_message))

    try {

        if (String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON') {

            let validar = await validarDados(atividade)

            if (validar) {
                return validar
            } else {
                let result = await atividadeDAO.insertAtividade(atividade)
                if (result) {

                    atividade.id = result

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response = atividade
                } else {
                    return message.ERROR_INTERNAL_SERVER_MODEL
                }
                return message.DEFAULT_MESSAGE
            }
        } else {
            return message.ERROR_CONTENT_TYPE
        }
    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER// ERRO 500 controller
    }

}

const atualizarAtividade = async function (atividade, id, contentType) {
    
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        
        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {
            
            let resultBuscarID = await buscarAtividade(id)

            if (resultBuscarID.status) {
                let validar = await validarDados(atividade)

                
                if (!validar) {
                    atividade.id = id

                    let result = await atividadeDAO.updateAtividade(atividade)

                    if (result) {
                        message.DEFAULT_MESSAGE.status = message.SUCCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message = message.SUCCESS_UPDATED_ITEM.message
                        message.DEFAULT_MESSAGE.response = atividade

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


        } else {
            return message.ERROR_CONTENT_TYPE //415
        }

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER//500(model)
    }

}

const listarAtividade = async function () {

    let message = JSON.parse(JSON.stringify(config_message))
    try {

        let result = await atividadeDAO.selectAllAtividade()


        if (result) {

            if (result.length > 0) {
                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.atividade = result

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

const buscarAtividade = async function (id) {

    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (id == undefined || id == '' || id == null || isNaN(id)) {
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await atividadeDAO.selectByIdAtividade(id)

            if (result) {
                if (result.length > 0) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response = result

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

const excluirAtividade = async function (id) {

    let message = JSON.parse(JSON.stringify(config_message))

    try {

        let resultBuscarID = await buscarAtividade(id)

        if (resultBuscarID.status) {

            let result = await atividadeDAO.deleteAtividade(id)

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

const validarDados = async function (atividade) {
    let message = JSON.parse(JSON.stringify(config_message))

    if (atividade.nome == undefined || atividade.nome == '' || atividade.nome == null || atividade.nome.length > 80) {
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400
    } else {
        return false
    }
}




module.exports = {
    inserirNovaAtividade,
    atualizarAtividade,
    listarAtividade,
    buscarAtividade,
    excluirAtividade,
    validarDados
}