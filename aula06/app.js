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
const controllerGenero = require('./controller/genero/controller_genero.js')
const controllerClassificacao = require('./controller/classificacao/controller_classificacao.js')
const controllerNacionalidade = require('./controller/nacionalidade/controller_nacionalidade.js')
const controllerAtor = require('./controller/ator/controller_ator.js')
const controllerDiretor = require('./controller/diretor/controller_diretor.js')


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


//------------------------------------------END-POINT FILME---------------------------//
app.post('/v1/senai/locadora/filme', bodyParseJSON, async function (request, response) {
    //recebe o conteúdo dentro do body da requisição
    let dados = request.body
    //Recebe o content type da requisição para validar se é um Json
    let contentType = request.headers['content-type']

    let result = await controllerFilme.inserirNovoFilme(dados, contentType)
    console.log(result)

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


app.get('/v1/senai/locadora/atividade', async function (request, response) {
    let result = await controllerAtividade.listarAtividade()

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/atividade/:id', async function (request, response) {
    let id = request.params.id
    
    let result = await controllerAtividade.buscarAtividade(id)

    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/senai/locadora/atividade/:id', bodyParseJSON, async function(request, response) {
    
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']

    //Receber o ID do registro a ser atulizado
    let id = request.params.id

    //Receber os dados enviados no corpo de requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminhando os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerAtividade.atualizarAtividade(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/senai/locadora/atividade/:id', async function(request, response) {
    

    let id = request.params.id

    let result = await controllerAtividade.excluirAtividade(id)

    response.status(result.status_code)
    response.json(result)

})

//------------------------------------------END-POINT GENERO---------------------------//

app.post('/v1/senai/locadora/genero', bodyParseJSON, async function (request, response) {
    //recebe o conteúdo dentro do body da requisição
    let dados = request.body
    //Recebe o content type da requisição para validar se é um Json
    let contentType = request.headers['content-type']
    
    let result = await controllerGenero.inserirNovoGenero(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/genero', async function (request, response) {
    let result = await controllerGenero.listarGenero()

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/genero/:id', async function (request, response) {
    let id = request.params.id
    
    let result = await controllerGenero.buscarGenero(id)

    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/senai/locadora/genero/:id', bodyParseJSON, async function(request, response) {
    
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']

    //Receber o ID do registro a ser atulizado
    let id = request.params.id

    //Receber os dados enviados no corpo de requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminhando os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerGenero.atualizarGenero(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/senai/locadora/genero/:id', async function(request, response) {
    

    let id = request.params.id

    let result = await controllerGenero.excluirGenero(id)

    response.status(result.status_code)
    response.json(result)

})

//------------------------------------------END-POINT CLASSIFICAÇÃO---------------------------//

app.post('/v1/senai/locadora/classificacao', bodyParseJSON, async function (request, response) {
    //recebe o conteúdo dentro do body da requisição
    let dados = request.body
    //Recebe o content type da requisição para validar se é um Json
    let contentType = request.headers['content-type']
    
    let result = await controllerClassificacao.inserirNovaClassificacao(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/classificacao', async function (request, response) {
    let result = await controllerClassificacao.listarClassificacao()

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/classificacao/:id', async function (request, response) {
    let id = request.params.id
    
    let result = await controllerClassificacao.buscarClassificacao(id)

    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/senai/locadora/classificacao/:id', bodyParseJSON, async function(request, response) {
    
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']

    //Receber o ID do registro a ser atulizado
    let id = request.params.id

    //Receber os dados enviados no corpo de requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminhando os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerClassificacao.atualizarClassificacao(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/senai/locadora/classificacao/:id', async function(request, response) {
    

    let id = request.params.id

    let result = await controllerClassificacao.excluirClassificacao(id)

    response.status(result.status_code)
    response.json(result)

})

//------------------------------------------END-POINT NACIONALIDADE---------------------------//

app.post('/v1/senai/locadora/nacionalidade', bodyParseJSON, async function (request, response) {
    //recebe o conteúdo dentro do body da requisição
    let dados = request.body
    //Recebe o content type da requisição para validar se é um Json
    let contentType = request.headers['content-type']
    
    let result = await controllerNacionalidade.inserirNovaNacionalidade(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/nacionalidade', async function (request, response) {
    let result = await controllerNacionalidade.listarNacionalidade()

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/nacionalidade/:id', async function (request, response) {
    let id = request.params.id
    
    let result = await controllerNacionalidade.buscarNacionalidade(id)

    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/senai/locadora/nacionalidade/:id', bodyParseJSON, async function(request, response) {
    
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']

    //Receber o ID do registro a ser atulizado
    let id = request.params.id

    //Receber os dados enviados no corpo de requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminhando os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerNacionalidade.atualizarNacionalidade(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/senai/locadora/nacionalidade/:id', async function(request, response) {
    

    let id = request.params.id

    let result = await controllerNacionalidade.excluirNacionalidade(id)

    response.status(result.status_code)
    response.json(result)

})


//------------------------------------------END-POINT ATOR---------------------------//

app.post('/v1/senai/locadora/ator', bodyParseJSON, async function (request, response) {
    //recebe o conteúdo dentro do body da requisição
    let dados = request.body
    //Recebe o content type da requisição para validar se é um Json
    let contentType = request.headers['content-type']
    
    let result = await controllerAtor.inserirNovoAtor(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/ator', async function (request, response) {
    let result = await controllerAtor.listarAtor()

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/ator/:id', async function (request, response) {
    let id = request.params.id
    
    let result = await controllerAtor.buscarAtor(id)

    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/senai/locadora/ator/:id', bodyParseJSON, async function(request, response) {
    
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']

    //Receber o ID do registro a ser atulizado
    let id = request.params.id

    //Receber os dados enviados no corpo de requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminhando os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerAtor.atualizarAtor(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/senai/locadora/ator/:id', async function(request, response) {
    

    let id = request.params.id

    let result = await controllerAtor.excluirAtor(id)

    response.status(result.status_code)
    response.json(result)

})

//------------------------------------------END-POINT DIRETOR---------------------------//

app.post('/v1/senai/locadora/diretor', bodyParseJSON, async function (request, response) {
    //recebe o conteúdo dentro do body da requisição
    let dados = request.body
    //Recebe o content type da requisição para validar se é um Json
    let contentType = request.headers['content-type']
    
    let result = await controllerDiretor.inserirNovoDiretor(dados, contentType)
    
    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/diretor', async function (request, response) {
    let result = await controllerDiretor.listarDiretor()

    response.status(result.status_code)
    response.json(result)
})

app.get('/v1/senai/locadora/diretor/:id', async function (request, response) {
    let id = request.params.id
    
    let result = await controllerDiretor.buscarDiretor(id)

    response.status(result.status_code)
    response.json(result)
})

app.put('/v1/senai/locadora/diretor/:id', bodyParseJSON, async function(request, response) {
    
    //Recebe o contenty type da requisição
    let contentType = request.headers['content-type']

    //Receber o ID do registro a ser atulizado
    let id = request.params.id

    //Receber os dados enviados no corpo de requisição
    let dados = request.body

    //Chama a função de atualizar na controller e encaminhando os dados, id e content-type
    //obedecendo a ordem de criação na função da controller
    let result = await controllerDiretor.atualizarDiretor(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)

})

app.delete('/v1/senai/locadora/diretor/:id', async function(request, response) {
    

    let id = request.params.id

    let result = await controllerDiretor.excluirDiretor(id)

    response.status(result.status_code)
    response.json(result)

})

//serve para inicializar a Api para receber requisições
app.listen(8080, function () {
    console.log('Api funcionando e aguardando novas requisições...')
})