const config_message = require('../modulo/configMessages.js')

const nacionalidadeDAO = require('../../model/DAO/nacionalidade/nacionalidade.js')

const validarDados = async function (nacionalidade) {
    let message = JSON.parse(JSON.stringify(config_message))

    if (nacionalidade.nome_pais == undefined || nacionalidade.nome_pais == '' || nacionalidade.nome_pais == null || nacionalidade.nome_pais.length > 80) {
        message.ERROR_BAD_REQUEST.field = '[NOME_PAIS] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (nacionalidade.sigla == undefined || nacionalidade.sigla == '' || nacionalidade.sigla == null || nacionalidade.sigla.length > 5) {
        message.ERROR_BAD_REQUEST.field = '[SIGLA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (nacionalidade.continente == undefined || nacionalidade.continente == '' || nacionalidade.continente == null || nacionalidade.continente.length < 5) {
        message.ERROR_BAD_REQUEST.field = '[CARACTERISTICA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else {
        return false
    }

}

const inserirNovaNacionalidade = async function (nacionalidade, contentType) {

    let message = JSON.parse(JSON.stringify(config_message))

    try {
        
        if (String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON'){

            let validar = await validarDados(nacionalidade)

            if(validar){
                return validar
            } else{
                let result = await nacionalidadeDAO.insertNacionalidade(nacionalidade)
                if(result) { //status code 201

                    nacionalidade.id = result

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response = nacionalidade
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

const listarNacionalidade = async function () {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        let result = await nacionalidadeDAO.selectAllNacionalidade()

        if (result) {
            if (result.length > 0) {
                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.nacionalidade = result

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


module.exports = {
    validarDados,
    inserirNovaNacionalidade,
    listarNacionalidade
}