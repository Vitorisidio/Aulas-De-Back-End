const config_message = require('../modulo/configMessages.js')

const classificacaoDAO = require('../../model/DAO/classificacao/classificacao.js')

const validarDados = async function (classificacao) {
    let message = JSON.parse(JSON.stringify(config_message))

    if (classificacao.nome == undefined || classificacao.nome == '' || classificacao.nome == null || classificacao.nome.length > 80) {
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (classificacao.sigla == undefined || classificacao.sigla == '' || classificacao.sigla == null || classificacao.sigla.length > 3) {
        message.ERROR_BAD_REQUEST.field = '[SIGLA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (classificacao.caracteristica == undefined || classificacao.caracteristica == '' || classificacao.caracteristica == null || classificacao.caracteristica.length < 5) {
        message.ERROR_BAD_REQUEST.field = '[CARACTERISTICA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else {
        return false
    }

}

const inserirNovaClassificacao = async function (classificacao, contentType) {

    let message = JSON.parse(JSON.stringify(config_message))

    try {
        
        if (String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON'){

            let validar = await validarDados(classificacao)

            if(validar){
                return validar
            } else{
                let result = await classificacaoDAO.insertClassificacao(classificacao)
                if(result) { //status code 201

                    classificacao.id = result

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response = classificacao
                }else {//status code 500
                    return message.ERROR_INTERNAL_SERVER_MODEL //Erro 500 model
                }
                return message.DEFAULT_MESSAGE
            }
        }else {
            return message.ERROR_CONTENT_TYPE
        }


    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER// ERRO 500 controller     
    }
}

const listarClassificacao = async function () {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        let result = await classificacaoDAO.selectAllClassificacao()

        if (result) {
            if (result.length > 0) {
                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.genero = result

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

const buscarClassificacao = async function (id) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (id == undefined || id == '' || id == null || isNaN(id)) {
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await classificacaoDAO.selectByIdClassificacao(id)

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

module.exports = {
    validarDados,
    inserirNovaClassificacao,
    listarClassificacao,
    buscarClassificacao,
}