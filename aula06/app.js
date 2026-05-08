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
const controllerAtividade = require('./controller/atividade/controller_atividade.js')

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


app.get('/v1/senai/locadora/filme', async function (request, response) {
    let result = await controllerFilme.listarFilmes()

    response.status(result.status_code)
    response.json(result)
})

//end-point para Listar todos os filmes pelo id
app.get('/v1/senai/locadora/filme/:id', async function (request, response) {
    let id = request.params.id
    
    let result = await controllerFilme.buscarFilme(id)

    response.status(result.status_code)
    response.json(result)
})

//end-point para atualizar um filme pelo id
app.put('/v1/senai/locadora/filme/:id', bodyParseJSON, async function(request, response) {
    
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']

    //Receber o ID do registro a ser atulizado
    let id = request.params.id

    //Receber os dados enviados no corpo de requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminhando os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerFilme.atualizarFilme(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

//end-point para deletar um filme pelo id
app.delete('/v1/senai/locadora/filme/:id', async function(request, response) {
    

    let id = request.params.id

    let result = await controllerFilme.excluirFilme(id)

    response.status(result.status_code)
    response.json(result)

})



//------------------------------------------END-POINT ATIVIDADE---------------------------//

app.post('/v1/senai/locadora/atividade', bodyParseJSON, async function (request, response) {
    //recebe o conteúdo dentro do body da requisição
    let dados = request.body
    //Recebe o content type da requisição para validar se é um Json
    let contentType = request.headers['content-type']
    
    let result = await controllerAtividade.inserirNovaAtividade(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})





//serve para inicializar a Api para receber requisições
app.listen(8080, function () {
    console.log('Api funcionando e aguardando novas requisições...')
})