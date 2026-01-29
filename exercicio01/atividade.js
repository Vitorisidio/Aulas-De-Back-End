

console.log('somativa de notas')

var readline = require("readline")

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('por favor digite o seu nome:', function (nomeUsuario) {
    
    entradaDeDados.question("por favor digitar o seu primeiro valor:", function (valorUm) {

        entradaDeDados.question("por favor digitar o seu segundo valor:", function (valorDois) {

            entradaDeDados.question("por favor digitar o seu terceiro valor:", function (valorTres) {

               var valor = Number(valorUm)+Number(valorDois)+Number(valorTres) // A classe Number converte uma String para Número
               console.log('O nome do usúario é: ' + nomeUsuario) 
               console.log("O resultado é: " + valor)
            })

        })   

    })
})
