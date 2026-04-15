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

app.get('/v1/senai/help', function (request, response) {

    let docAPI = {
        "API - description": "API para manipular dados de Números do Whatsapp",
        "date": "2026-04-15",
        "Development": "Vitor Isidio",
        "version": "1.0",
        "Endpoints": [
            {
                "id": 1,
                "Rota 1": "/v1/senai/whatsapp/dados/geral",
                "obs": "Retorna a Lista de todos os dados de usuário independente do número",
            },
            {
                "id": 2,
                "Rota 2": "/v1/senai/whatsapp/dados/usuario/11966578996",
                "obs": "Retorna a Lista dos dados da conta do profile do usuário filtrado pelo número de telefone",
            },
            {
                "id": 3,
                "Rota 3": "/v1/senai/whatsapp/dados/contatos/:11966578996",
                "obs": "Retorna a lista dos dados de contato para cada usuário filtrado pelo número",
            },
            {
                "id": 4,
                "Rota 4": "/v1/senai/whatsapp/dados/mensagens/11966578996",
                "obs": "Retorna a Lista de todas as mensagens trocadas de uma conta de usuário",
            },
            {
                "id": 5,
                "Rota 5": "/v1/senai/whatsapp/dados/conversa?nome=Jane Smith&numero=11987876567",
                "obs": "Retorna a Lista de uma conversa de um usuário e um contato filtrado primeiro pelo nome e depois pelo número de telefone",
            },
            {
                "id": 6,
                "Rota 6": "/v1/senai/whatsapp/dados/chave?pesquisa=leonid&numero=11987876567",
                "obs": "Realizar um filtro como pesquisa de palavra chave com base em uma palavra nas conversas do usuário e do respectivo contato filtrado primeiro pela pesquisa e depois pelo número de telefone",
            }
        ]
    }

    response.status(200)
    response.json(docAPI)
})


//serve para inicializar a Api para receber requisições
app.listen(8080, function () {
    console.log('Api funcionando e aguardando novas requisições...')
})