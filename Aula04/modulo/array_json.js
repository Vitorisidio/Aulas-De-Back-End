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
const listaDeNomes = ['José', 'Maria', 'João', "André", "Alex"]
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
const manipularDados = function(){
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
    listaDeFornecedores.push('Luizinho da Silva','André da Silva','Carlos da Silva')


    console.log(listaDeFornecedores)
}

//exibirDados()
manipularDados()