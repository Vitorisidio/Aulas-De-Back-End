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
const filmeDAO = require('../../model/DAO/filme/filme.js')

//Função para inserir um novo Filme
const inserirNovoFilme = async function (filme, contentType) {

    //criando um clone do objeto JSON para manipular sua estrutura local sem modificar sua estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {


        if (String(contentType).toLocaleUpperCase() == 'APPLICATION/JSON') {

            //Validação de dados para os atributos do Filme (ERRO:400)
            let validar = await validarDados(filme)

            //Se a função validar retornar um JSON de erro, iremos devolver ao APP o erro
            if (validar) {
                return validar
            } else {
                //Encaminha os dados do filme para o DAO
                let result = await filmeDAO.insertFilme(filme)
                if (result) { //status code 201

                    filme.id = result

                    message.DEFAULT_MESSAGE.status = message.SUCCESS_CREATED_ITEM.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
                    message.DEFAULT_MESSAGE.message = message.SUCCESS_CREATED_ITEM.message
                    message.DEFAULT_MESSAGE.response = filme
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

//Função para atualizar um filme
const atualizarFilme = async function (filme, id, contentType) {
    //criando um clone do objeto JSON para manipular sua estrutura local sem modificar sua estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        //Validação do Contenty type para receber apenas Json
        if (String(contentType).toUpperCase() == 'APPLICATION/JSON') {
            //validação para o ID incorreto
            let resultBuscarID = await buscarFilme(id)

            //Se a função buscar encontrar o filme o atributo status do JSON será verdadeiro
            //Isso significa que o filme existe na base, caso não retorne true, então
            //O retorno da função poderá ser 400 ou 404 ou até mesmo um 500
            if (resultBuscarID.status) {
                let validar = await validarDados(filme)

                //validação de campos obrigatórios para atualização(body)
                if (!validar) {
                    //Adiciono o atributo ID do Filme no JSON para ser enviado ao DAO
                    filme.id = id

                    //chama a função do DAO para atualizar o FIlme (dados e o ID)
                    let result = await filmeDAO.updateFilme(filme)

                    if (result) {
                        message.DEFAULT_MESSAGE.status = message.SUCCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message = message.SUCCESS_UPDATED_ITEM.message
                        message.DEFAULT_MESSAGE.response = filme

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

//Função para retornar todos os filmes
const listarFilmes = async function () {
    //criando um clone do objeto JSON para manipular sua estrutura local sem modificar sua estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        //chama a função do DAO para retornar a lista de todos os filmes
        let result = await filmeDAO.selectAllFilme()

        //Valida se o DAO conseguiu processar os dados
        if (result) {
            //Validação para verificar se existe conteúdo no array
            if (result.length > 0) {
                message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.filme = result

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

//Função para buscar um novo filme pelo ID
const buscarFilme = async function (id) {
    //criando um clone do objeto JSON para manipular sua estrutura local sem modificar sua estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    try {
        if (id == undefined || id == '' || id == null || isNaN(id)) {
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST //400
        } else {
            let result = await filmeDAO.selectByIdFilme(id)

            if (result) {
                if (result.length > 0) {
                    message.DEFAULT_MESSAGE.status = message.SUCCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code = message.SUCCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme = result

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

//Função para excluir um filme
const excluirFilme = async function (id) {
    //criando um clone do objeto JSON para manipular sua estrutura local sem modificar sua estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        //validação do erro 400 e 404
        let resultBuscarID = await buscarFilme(id)

        //validação para verificar se o status é verdadeiro(se existe o filme)
        if (resultBuscarID.status) {
            //Chamar a função do DAO para excluir o filme
            let result = await filmeDAO.deleteFilme(id)

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
//Função para validar todos os dados de filme (obrigatórios,qtd de caracteres, etc..)
const validarDados = async function (filme) {
    let message = JSON.parse(JSON.stringify(config_message))

    if (filme.nome == undefined || filme.nome == '' || filme.nome == null || filme.nome.length > 80) {
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (filme.data_lancamento == undefined || filme.data_lancamento == '' || filme.data_lancamento == null || filme.data_lancamento.length != 10) {
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (filme.duracao == undefined || filme.duracao == '' || filme.duracao == null || filme.duracao.length < 5) {
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (filme.sinopse == undefined || filme.sinopse == '' || filme.sinopse == null) {
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (isNaN(filme.avaliacao) || filme.avaliacao.length > 5) {
        message.ERROR_BAD_REQUEST.field = '[AVALIAÇÃO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (filme.valor == undefined || filme.valor == '' || filme.valor == null || filme.valor.split('.')[0].length > 3 || isNaN(filme.valor)) {
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400

    } else if (filme.capa.length > 255) {
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST//400
    } else {
        return false
    }

}


module.exports = {
    inserirNovoFilme,
    atualizarFilme,
    listarFilmes,
    buscarFilme,
    excluirFilme,
}