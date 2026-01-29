// comentario em linha

/*comentario
em
bloco */

//Imprime no terminal um conteúdo:
console.log('testando o print do console')

var nome = "vitor"//criando uma varíavel(não precisar especificar o tipo)

console.log(nome) //imprimindo a variável

//formas de concatenar variaveis e texto
console.log('O nome do usúario é: ' + nome) //concatenando
console.log(`O nome do usúario é: ${nome}`) //concatenando de outra forma útilizando CRASE

//import da biblioteca para captar entrada de dados via terminal
var readline = require("readline")

//Cria uma interface para entrada e saída de dados pelo terminal
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
/*
função para retornar o nome digitado no terminal
O metodo question após a digitação chama a sua função "CALL BACK"
Para entregar o que foi digitado no terminal. através do argumento nomeUsuario
*/
entradaDeDados.question('por favor digite o seu nome:', function (nomeUsuario,) {
    console.log('O nome do usúario é: ' + nomeUsuario)
    
    //entrada de dados para o Email
    entradaDeDados.question("Favor digitar o seu email:", function (emailUsuario) {
        console.log(`O email informado é: ${emailUsuario}`)

    })
})

