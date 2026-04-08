/*------------------------------------------------------------
* Objetivo: Arquivo responsável pela criação da API do projeto de Estados e Cidades
* Data: 01/04/2026
* Autor: Vitor
* Versão: 1.0
*
*Instalação do EXPRESS - npm install express --save
    Dependencia responsavel pela utilização do protocolo HTTP para criar uma API

*Instalação do - npm install cors --save
    Dependencia responsavel pelas configurações a serem realizadas para a permissão de acesso da API
------------------------------------------------------------*/

//import das dependencias para criar a API
const express = require('express')
const cors = require('cors')

//Criando um objeto para manipular o express
const app = express()

//conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin: ['*'], //Origem da requisição, podendo ser um ip(so maquinas especificas podem acessar a API) ou o *(todas as maquinas podem acessar a API)
    methods: 'Get', //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'], // São permissões de cabeçalho do CORS
}

//configura as permissões da API através do CORS
app.use(cors(corsOptions))

//Response(res) -> são retorno da API (responder)
// Request(req) -> São chegadas de dados na Api (receber)

const estadoCidades = require('./modulo/funcao.js')

//Criando EndPoints para a API

//Retorna dados dos estados filtrando pelo uf
app.get("/v1/senai/dados/estado", function (request, response) {
    //recebe a variavel UF via Query Params, que são variaveis encaminhadas após o simbolo de ?
    let sigla = request.query.uf
    let estado = estadoCidades.getDadosEstado(sigla)

    //Caso o estado seja encontrado, a API retorna os dados em formato JSON com status 200 (OK).
    //Caso o estado não seja encontrado (ou seja, a função retorna false), 
    //a API retorna uma mensagem de erro em JSON com status 404 (Not Found)
    if (estado) {
        response.status(200)
        response.json(estado)
    } else {
        response.status(404)
        response.json({ "message": "O estado informado não foi encontrado" })
    }

})

//Retorna dados da capital de cada estado filtrando pelo uf
app.get("/v1/senai/capital/estado/:uf", function (request, response) {

    //recebe a variavel UF atraves da URL separado pela /
    let sigla = request.params.uf
    let estado = estadoCidades.getCapitalEstado(sigla)

    if (estado) {
        response.status(200)
        response.json(estado)
    } else {
        response.status(404)
        response.json({ "message": "O estado informado não foi encontrado" })
    }

})

//Retorna dados dos estados que forma capitais do Brasil
app.get("/v1/senai/estados/capital/brasil", function (request, response) {

    let estados = estadoCidades.getCapitalPais()

    response.status(200)
    response.json(estados)

})

//Retorna dados dos estados filtrando pela região
app.get("/v1/senai/estados/regiao/:regiao", function (request, response) {

    let sigla = request.params.regiao
    let regiao = estadoCidades.getEstadosRegiao(sigla)

    if (regiao) {
        response.status(200)
        response.json(regiao)
    } else {
        response.status(404)
        response.json({ "message": "A região informada não foi encontrado" })
    }

})

//Retorna dados das cidades filtrando pelo Estado
app.get("/v1/senai/cidades/estados/:uf", function (request, response) {

    let sigla = request.params.uf
    let regiao = estadoCidades.getCidades(sigla)

    if (regiao) {
        response.status(200)
        response.json(regiao)
    } else {
        response.status(404)
        response.json({ "message": "O estado informado não foi encontrado" })
    }

})

app.get('/v1/senai/estados', function (request, response) {

    let estados = estadoCidades.getListaDeEstados()

    response.status(200)
    response.json(estados)

})


app.get('/v1/senai/help', function (request, response) {

    let docAPI = {
        "API - description": "API para manipular dados de Estados e Cidades",
        "date": "2026-04-02",
        "Development": "Vitor Isidio",
        "version": "1.0",
        "Endpoints": [
            {
                "id": 1,
                "Rota 1": "/v1/senai/estados",
                "obs": "Retorna a lista de todos os estados",
            },
            {
                "id": 2,
                "Rota 2": "/v1/senai/dados/estado/sp",
                "obs": "Retorna os dados do estado filtrando pela sigla do estado",
            },
            {
                "id": 3,
                "Rota 3": "/v1/senai/capital/estado/:sp",
                "obs": "Retorna os dados da capital filtrando pela sigla do estado",
            },
            {
                "id": 4,
                "Rota 4": "/v1/senai/estados/capital/brasil",
                "obs": "Retorna todos os estados que formaram capital do Brasil",
            },
            {
                "id": 5,
                "Rota 5": "/v1/senai/estados/regiao/sul",
                "obs": "Retorna todos os estados que é referente a uma região",
            },
            {
                "id": 6,
                "Rota 6": "/v1/senai/cidades/estados/sp",
                "obs": "Retorna todas as cidades filtrando pela sigla do estado",
            }
        ]
    }

    response.status(200)
    response.json(docAPI)
})




app.get('/v1/senai/cidades', function (request, response) {
    response.json({ "message": "Testando minha API de Cidade" })
    response.status(200)
})

//serve para inicializar a Api para receber requisições
app.listen(8080, function () {
    console.log('Api funcionando e aguardando novas requisições...')
})