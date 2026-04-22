/*********************************
 * 
 * 
 * 
*********************************/


//import das dependencias para criar a API
const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')

//import das controllers do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')

//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParseJSON = bodyParse.json()

//Criando um objeto para manipular o express
const app = express()

//conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //Origem da requisição, podendo ser um ip(so maquinas especificas podem acessar a API) ou o *(todas as maquinas podem acessar a API)
    methods: 'GET, POST, PUT, DELETE, OPTIONS', //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'], // São permissões de cabeçalho do CORS
}

//configura as permissões da API através do CORS
app.use(cors(corsOptions))

//ENDPOINTS
app.post('/v1/senai/locadora/filme', bodyParseJSON, async function (request, response) {
    //recebe o conteúdo dentro do body da requisição
    let dados = request.body
    //Recebe o content type da requisição para validar se é um Json
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovoFilme(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})



//serve para inicializar a Api para receber requisições
app.listen(8080, function () {
    console.log('Api funcionando e aguardando novas requisições...')
})