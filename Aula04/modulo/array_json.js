/*------------------------------------------------------------
* Objetivo: Manipular dados utilizando array e json
* Data: 05/03/2026
* Autor: Vitor
* Versão: 1.0
------------------------------------------------------------*/


/*
    [ ] -> representa um objeto do tipo ARRAY
    { } -> representa um objeto do tipo JSON

    Array -> É um objeto na memória que permite trabalhar com vários valores em um único objeto

            indice   0        1        2
    let nome   =  ['josé', 'Maria', 'João']

    JSON -> É um objeto na memória que permite trabalhar com CHAVE E VALOR

        let cliente = {"nome": "José"
                   "telefone": "123456789"
                   "email": "jose@gmail.com" }
*/

//formas de criar um ARRAY
//OBS: O node.js permite guardar tipos de dados diferentes dentro do mesmo array(String, Number, boolean)
const listaDeNomes = ['José', 'Maria', 'João', "André", "Alex", "Carlos", 'Ana', 'Bruna', 'Jake']
const listaDeClientes = []
const listaDeFornecedores = []

const exibirDados = function () {
    //exibe objeto array e seu conteúdo
    console.log(listaDeNomes)

    //Exibe o objeto array em forma de tabela com seus indices
    console.table(listaDeNomes)

    //Exibe o conteúdo de um indice especifico do array
    console.log(listaDeNomes[0])

    //retorna o tipo de dados de um indice do array
    console.log(typeof (listaDeNomes[4]))

    console.log(`o nome do cliente é: ${listaDeNomes[0]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[1]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[2]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[3]}`)
    console.log(`o nome do cliente é: ${listaDeNomes[4]}`)
    console.log('\n')



    //Estrutura de repetição

    //While
    console.log("******WHILE*******")
    let cont = 0
    while (cont <= 4) {
        console.log(`o nome do cliente é: ${listaDeNomes[cont]}`)
        cont += 1
    }
    console.log('\n')


    //FOR
    console.log("******FOR*******")
    for (let contador = 0; contador <= 4; contador++) {
        console.log(`o nome do cliente é: ${listaDeNomes[contador]}`)
    }
    console.log('\n')


    //FOR EACH
    // retorna o conteúdo de cada elemento através de um CALL BACK
    console.log('********** FOR EACH*********')
    listaDeNomes.forEach(function (cliente) {
        console.log(`o nome do cliente é: ${cliente}`)
    })
    console.log('\n')


    //FOR IN
    //retorna o indice do elemento, e será preciso colocar dentro do objeto do array
    //EX: listaDeNomes[item]
    //praticamente igual ao for e while
    console.log('********** FOR IN*********')
    for (item in listaDeNomes) {
        console.log(`o nome do cliente é: ${listaDeNomes[item]}`)
    }
    console.log('\n')


    //FOR OF
    //Percorre o array e retorna somente o conteúdo de cada indice, sendo muito parecido
    // com o For Each
    console.log('********** FOR OF*********')
    for (cliente of listaDeNomes) {
        console.log(`o nome do cliente é: ${cliente}`)
    }
    console.log('\n')

    //contar os elementos dentro de um ARRAY
    console.log(listaDeNomes.length)

}

//Inserir e apagar dados
const manipularDados = function () {
    // Adicionando valores novos no array através de indices
    listaDeClientes[0] = 'José da Silva'
    listaDeClientes[1] = 'Maria da Silva'
    listaDeClientes[2] = 'João da Silva'
    listaDeClientes[4] = 'Alex da Silva'

    console.log(listaDeClientes)

    // O push permite adicionar novos valores no array, sempre no final da lista
    listaDeFornecedores.push('Luiz da Silva')
    listaDeFornecedores.push('Zezinho da Silva')
    listaDeFornecedores.push('Huguinho da Silva')
    listaDeFornecedores.push('Luizinho da Silva', 'André da Silva', 'Carlos da Silva')
    console.table(listaDeFornecedores)

    // O unshift permite adicionar novos valores no array, sempre no inicio da lista

    listaDeFornecedores.unshift("Ana Carolina")
    console.table(listaDeFornecedores)


    //O pop remove elementos do FINAL da lista
    listaDeFornecedores.pop()
    console.table(listaDeFornecedores)

    //O shift remove elementos do Inicio da lista e reorganiza a ordem dos indicies(o indice 1 vira 0, o 2 vira 1... )
    listaDeFornecedores.shift()
    console.table(listaDeFornecedores)

    //SPLICE PARA REMOVER ITEM

    //O splice remove elementos especifico da lista baseado no indice
    //como usar o splice: splice(indice, a quantidade de elementos que vc quer remover)
    listaDeFornecedores.splice(2, 1)
    console.table(listaDeFornecedores)

    //SPLICE PARA ADICIONAR ITEM

    // O método splice permite adicionar ou remover elementos de um array em uma posição específica (índice).
    // Sintaxe: splice(indice, quantidadeDeElementosRemovidos, elementoQueSeráAdicionado)
    listaDeFornecedores.splice(2, 0, "Carlos da Silva")
    console.table(listaDeFornecedores)


}

//
const removerItem = function (nome) {

    //indexOf: retorna o indice de um elemento fazendo a busca pelo valor
    //se o indexof não encontrar o conteúdo ele devolve -1
    let indice = listaDeNomes.indexOf(nome)
    if (indice != -1) {
        listaDeNomes.splice(indice, 1)
        return true
    } else {
        return false
    }

    /*o for in Faz a mesma coisa que o indexOf a diferença que o indexof encontra o primeiro elemento e para
    (se tiver 10 maria ele so vai apagar a primeira que ele achar) ja o for in vai percorrer todo o 
    array e apagar todos os elementos iguais */

    //for(indice in listaDeNomes){
    //    if(listaDeNomes[indice] == nome){
    //        listaDeNomes.splice(indice, 1)
    //    }
    //}

}


const vereficarItem = function (nome) {

    //includes: Verifica a existencia de um conteúdo dentro de uma lista (true/false)
    return listaDeNomes.includes(nome)

}

const quantidadeItens = function (nome) {
    //conta quantos itens iguais tem no array
    let cont = 0
    listaDeNomes.forEach(function (item) {
        if (String(item).toUpperCase() == String(nome).toUpperCase())
            cont++
    })
    return cont

}

//exibirDados()
// manipularDados()
//console.table(listaDeNomes)
// let resposta = removerItem('Mara')
// if(resposta)
//     console.log('item removido')
// else
// console.log('item não encontrado')

// console.table(listaDeNomes)

//vereficarItem('Maria')

//console.log(quantidadeItens('maria'))




//JSON

const criandoDadosJSON = function () {
    let aluno = { "nome": "José", "ra": 123456, "telefone": "9757574414", "email": "jose@gmail.com" }

    //Exibindo o objeto JSON completo
    console.log(aluno)
    console.table(aluno)

    //Exibindo apenas um atributo do JSON
    console.log(aluno.nome)
    console.log(aluno.email)

    //Add um novo atributo no JSON
    aluno.sexo = "Masculino"
    console.log(aluno)

    //Remove um atributo especifico no JSON
    delete aluno.telefone
    console.log(aluno)
}

// criandoDadosJSON()


// MISTURANDO AS ESTRUTURAS

const cadastroDeProdutos = function () {
    let cores = [
        { "id": 1, "cor": "Branco" }, //indice 0 do array de cores
        { "id": 2, "cor": "Preto" }, //indice 1 do array de cores
        { "id": 3, "cor": "Azul" }, //indice 2 do array de cores
        { "id": 4, "cor": "Rosa" }, //indice 3 do array de cores
        { "id": 5, "cor": "Cinza" } //indice 4 do array de cores
    ]
    // console.log(cores[2].nome)
    // console.table(cores)

    let marcas = [
        { "id": 1, "marca": "LG", "telefone": "123456789", "email": "lg@lg.com.br" }, //indice 0 do array de cores
        { "id": 2, "marca": "Dell", "telefone": "987555558", "email": "dell@gmail.com.br" }, //indice 0 do array de cores
        { "id": 3, "marca": "Lenovo", "telefone": "456895569", "email": "lenovo@gmail.com.br" }, //indice 0 do array de cores
        { "id": 4, "marca": "Apple", "telefone": "458321952", "email": "apple@gmail.com.br" }, //indice 0 do array de cores
        { "id": 5, "marca": "Logitech", "telefone": "159324357", "email": "logitech@gmail.com.br" }, //indice 0 do array de cores
        { "id": 6, "marca": "Multilaser", "telefone": "789456123", "email": "multilaser@gmail.com.br" } //indice 0 do array de cores
    ]

    let produtos = [
        {
            "id": 1,
            "nome": "Monitor",
            "descricao": "27 polegadas",
            "marca": [
                marcas[1].marca
            ],
            "qtde": 20,
            "cor": [
                cores[4],
                cores[1],
            ],
            "valor": 800.50
        },
        {
            "id": 2,
            "nome": "Teclado",
            "descricao": "Teclado mecânico RGB",
            "marca": [
                marcas[5].marca
            ],
            "qtde": 200,
            "cor": cores,
            "valor": 150
        },
        {
            "id": 3,
            "nome": "Mouse",
            "descricao": "Mouse sem fio",
            "marca": [
                marcas[0].marca,
                marcas[1].marca,
                marcas[5].marca,
            ],
            "qtde": 500,
            "cor": [
                cores[0],
                cores[1],
                cores[4],
            ],
            "valor": 80
        },

    ]

    // console.log(produtos)
    // console.log(produtos[0].cor)
    // console.log(produtos[0].cor[1].cor)

    // percorre o objeto do produto para trazer os dados de cada produto
    produtos.forEach(function (itemProduto) {
        console.log('O nome do produto é: ' + itemProduto.nome + "\n")

        // percorre o objeto de marca de dentro de cada produto, para trazer as marcas
        itemProduto.marca.forEach(function (itemMarca) {
            console.log('A marca do produto é: ' + itemMarca)
        })

        // percorre o objeto de cor de dentro de cada produto, para trazer as cores
        itemProduto.cor.forEach(function (itemCor) {
            console.log('A cor do produto é: ' + itemCor.cor)
        })
    })


    //Pesquisando um produto pelo nome
    console.log('Pesquisando um produto pelo nome')
    let nome = "mouse"

    produtos.forEach(function(itemProduto){
        if(String(itemProduto.nome).toLocaleUpperCase() == String(nome).toLocaleUpperCase()){
            console.log(itemProduto)
        }
    })

    //Pesquisando um produto pela cor
    console.log('Pesquisando um produto pela cor')

    let cor = "branco"
    let status = false

    produtos.forEach(function(itemProduto){

        itemProduto.cor.forEach(function(itemCor){
            if(String(itemCor.cor).toLocaleUpperCase() == String(cor).toLocaleUpperCase()){
                console.log(itemProduto)
                status = true
            }
        })
    })

    if(!status){
        console.log('Item pesquisado não foi encontrado')
    }
}



cadastroDeProdutos()