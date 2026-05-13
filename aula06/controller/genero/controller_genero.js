/*------------------------------------------------------------
* Objetivo: Arquivo responsável pela validação, tratamento e manipulação de dados para o crud de filmes
* Data: 17/04/2026
* Autor: Vitor
* Versão: 1.0
*
------------------------------------------------------------*/

//Impot do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js')

//Impot do arquivo DAO para fazer o CRUD do filme no banco de dados
const generoDAO = require('../../model/DAO/genero/genero.js')

//Função para inserir um novo Filme
const inserirNovoGenero = async function (genero, contentType) {

    //criando um clone do objeto JSON para manipular sua estrutura local sem modificar sua estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {


        if (String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON') {

            //Validação de dados para os atributos do Filme (ERRO:400)
            let validar = await validarDados(genero)

            //Se a função validar retornar um JSON de erro, iremos devolver ao APP o erro
            if (validar) {
                return validar
            } else {
                //Encaminha os dados do filme para o DAO
                let result = await generoDAO.insertGenero(genero)
                if (result) { //status code 201

                    genero.id = result

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response = genero
                } else {//status code 500
                    return message.ERROR_INTERNAL_SERVER_MODEL //Erro 500 model
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

const validarDados = async function (genero) {
    let message = JSON.parse(JSON.stringify(config_message))

    if (genero.nome_genero == undefined || genero.nome_genero == '' || genero.nome_genero == null || genero.nome_genero.length > 80) {
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400
    }else {
        return false
    }

}

const listarGenero = async function () {
    //criando um clone do objeto JSON para manipular sua estrutura local sem modificar sua estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        //chama a função do DAO para retornar a lista de todos os filmes
        let result = await generoDAO.selectAllGenero()

        //Valida se o DAO conseguiu processar os dados
        if (result) {
            //Validação para verificar se existe conteúdo no array
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

const buscarGenero = async function (id) {
    //criando um clone do objeto JSON para manipular sua estrutura local sem modificar sua estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (id == undefined || id == '' || id == null || isNaN(id)) {
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await generoDAO.selectByIdGenero(id)

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

const atualizarGenero = async function (genero, id, contentType) {
    //criando um clone do objeto JSON para manipular sua estrutura local sem modificar sua estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        //Validação do Contenty type para receber apenas Json
        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {
            //validação para o ID incorreto
            let resultBuscarID = await buscarGenero(id)

            //Se a função buscar encontrar o filme o atributo status do JSON será verdadeiro
            //Isso significa que o filme existe na base, caso não retorne true, então
            //O retorno da função poderá ser 400 ou 404 ou até mesmo um 500
            if (resultBuscarID.status) {
                let validar = await validarDados(genero)

                //validação de campos obrigatórios para atualização(body)
                if (!validar) {
                    //Adiciono o atributo ID do Filme no JSON para ser enviado ao DAO
                    genero.id = id

                    //chama a função do DAO para atualizar o FIlme (dados e o ID)
                    let result = await generoDAO.updateGenero(genero)

                    if (result) {
                        message.DEFAULT_MESSAGE.status = message.SUCCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message = message.SUCCESS_UPDATED_ITEM.message
                        message.DEFAULT_MESSAGE.response = genero

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

const excluirGenero = async function (id) {
    //criando um clone do objeto JSON para manipular sua estrutura local sem modificar sua estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        //validação do erro 400 e 404
        let resultBuscarID = await buscarGenero(id)

        //validação para verificar se o status é verdadeiro(se existe a atividade)
        if (resultBuscarID.status) {
            //Chamar a função do DAO para excluir a atividade
            let result = await generoDAO.deleteGenero(id)

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
    inserirNovoGenero,
    validarDados,
    listarGenero,
    buscarGenero,
    atualizarGenero,
    excluirGenero
}