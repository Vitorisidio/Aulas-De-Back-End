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

const whatsapp = require('./modulo/funcao.js')
//dados geral
app.get("/v1/senai/whatsapp/dados/geral", function (request, response) {

    let whatsappDados = whatsapp.dadosGeral()
    response.status(200)
    response.json(whatsappDados)
})
//dados usuario
app.get("/v1/senai/whatsapp/dados/usuario/:numero", function (request, response) {

    //recebe a variavel UF atraves da URL separado pela /
    let numero = request.params.numero
    let whatsappDados = whatsapp.dadosUsuario(numero)

    if (numero) {
        response.status(200)
        response.json(whatsappDados)
    } else {
        response.status(404)
        response.json({ "message": "O número informado não foi encontrado" })
    }

})
//dados contatos
app.get("/v1/senai/whatsapp/dados/contatos/:numero", function (request, response) {

    //recebe a variavel UF atraves da URL separado pela /
    let numero = request.params.numero
    let whatsappDados = whatsapp.dadosContatos(numero)

    if (numero) {
        response.status(200)
        response.json(whatsappDados)
    } else {
        response.status(404)
        response.json({ "message": "O número informado não foi encontrado" })
    }

})
//dados Mensagens
app.get("/v1/senai/whatsapp/dados/mensagens/:numero", function(request, response){

        let numero = request.params.numero
    let whatsappDados = whatsapp.dadosMensagens(numero)

    if (numero) {
        response.status(200)
        response.json(whatsappDados)
    } else {
        response.status(404)
        response.json({ "message": "O número informado não foi encontrado" })
    }
})
//dados conversa
app.get("/v1/senai/whatsapp/dados/conversa", function(request, response){

        let numero = request.query.numero
        let nome = request.query.nome
    let whatsappDados = whatsapp.dadosconversa(nome,numero)

    if (nome && numero) {
        response.status(200)
        response.json(whatsappDados)
    } else {
        response.status(404)
        response.json({ "message": "O nome e o número informado não foi encontrado" })
    }
})
//palavra Chave
app.get("/v1/senai/whatsapp/dados/chave", function(request, response){

        let numero = request.query.numero
        let pesquisa = request.query.pesquisa
    let whatsappDados = whatsapp.palavraChave(pesquisa, numero)

    if (pesquisa && numero) {
        response.status(200)
        response.json(whatsappDados)
    } else {
        response.status(404)
        response.json({ "message": "A pesquisa e o número informado não foi encontrado" })
    }
})


//serve para inicializar a Api para receber requisições
app.listen(8080, function () {
    console.log('Api funcionando e aguardando novas requisições...')
})