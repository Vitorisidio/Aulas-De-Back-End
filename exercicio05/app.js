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

app.get("/v1/senai/whatsapp/dados/geral", function (request, response) {

    let whatsappDados = whatsapp.dadosGeral()
    response.status(200)
    response.json(whatsappDados)
})

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



//serve para inicializar a Api para receber requisições
app.listen(8080, function () {
    console.log('Api funcionando e aguardando novas requisições...')
})