const config_message = require('../modulo/configMessages.js')

const diretorDAO = require('../../model/DAO/diretor/diretor.js')

const validarDados = async function (diretor) {
    let message = JSON.parse(JSON.stringify(config_message))

    if (diretor.nome == undefined || diretor.nome == '' || diretor.nome == null || diretor.nome.length > 80) {
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (diretor.biografia && diretor.biografia.length > 65000 ) {
        message.ERROR_BAD_REQUEST.field = '[BIOGRAFIA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (diretor.foto == undefined || diretor.foto == '' || diretor.foto == null || diretor.foto.length < 5) {
        message.ERROR_BAD_REQUEST.field = '[FOTO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (diretor.data_nascimento && diretor.data_nascimento.length != 10) {
        message.ERROR_BAD_REQUEST.field = '[DATA_NASCIMENTO] INVÁLIDA'
        return message.ERROR_BAD_REQUEST
    }else {
        return false
    }

}

const inserirNovoDiretor = async function (diretor, contentType) {

    let message = JSON.parse(JSON.stringify(config_message))

    try {
        
        if (String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON'){

            let validar = await validarDados(diretor)

            if(validar){
                return validar
            } else{
                let result = await diretorDAO.insertDiretor(diretor)
                if(result) { //status code 201

                    diretor.id = result

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response = diretor
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

const listarDiretor = async function () {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        let result = await diretorDAO.selectAllDiretor()

        if (result) {
            if (result.length > 0) {
                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.diretor = result

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

const buscarDiretor = async function (id) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (id == undefined || id == '' || id == null || isNaN(id)) {
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await diretorDAO.selectByIdDiretor(id)

            if (result) {
                if (result.length > 0) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.diretor = result

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

const atualizarDiretor = async function (diretor, id, contentType) {
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {
            //validação para o ID incorreto
            let resultBuscarID = await buscarDiretor(id)

            if (resultBuscarID.status) {
                let validar = await validarDados(diretor)

                if (!validar) {
                    diretor.id = id

                    let result = await diretorDAO.updateDiretor(diretor)

                    if (result) {
                        message.DEFAULT_MESSAGE.status = message.SUCCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message = message.SUCCESS_UPDATED_ITEM.message
                        message.DEFAULT_MESSAGE.response = diretor

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

const excluirDiretor = async function (id) {
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        let resultBuscarID = await buscarDiretor(id)

        if (resultBuscarID.status) {
            let result = await diretorDAO.deleteDiretor(id)

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
    validarDados,
    inserirNovoDiretor,
    listarDiretor,
    buscarDiretor,
    atualizarDiretor,
    excluirDiretor
}

