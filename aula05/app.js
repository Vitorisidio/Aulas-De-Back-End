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
const cors    = require('cors')

//Criando um objeto para manipular o express
const app = express()

//conjunto de permissões a serem aplicadas no CORS da API
const corsOptions = {
    origin:['*'], //Origem da requisição, podendo ser um ip(so maquinas especificas podem acessar a API) ou o *(todas as maquinas podem acessar a API)
    methods: 'Get', //São os verbos que serão liberados na API (GET, POST, PUT e DELETE)
    allowedHeaders: ['Content-type', 'Autorization'], // São permissões de cabeçalho do CORS
}

//configura as permissões da API através do CORS
app.use(cors(corsOptions))

//Response(res) -> são retorno da API (responder)
// Request(req) -> São chegadas de dados na Api (receber)

const estadoCidades = require('./modulo/funcao.js')

//Criando EndPoints para a API
app.get('/v1/senai/estados', function(request, response){

    let estados = estadoCidades.getListaDeEstados()

    response.json(estados)
    response.status(200)

})




app.get("/v1/senai/dados/estado/:uf", function(request,response){

    let sigla = request.params.uf
    let estado = estadoCidades.getDadosEstado(sigla)

     response.json(estado)
     response.status(200)
})






app.get('/v1/senai/cidades', function(request,response){
    response.json({"message": "Testando minha API de Cidade"})
    response.status(200)
})

//serve para inicializar a Api para receber requisições
app.listen(8080,function(){
    console.log('Api funcionando e aguardando novas requisições...')
})