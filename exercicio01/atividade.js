

console.log('somativa de notas')

var readline = require("readline")

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('por favor digite o seu nome:', function (nomeUsuario) {
    console.log('O nome do usúario é: ' + nomeUsuario)
    
    entradaDeDados.question("Favor digitar o seu primeiro valor:", function (valorUm) {
        console.log('O primeiro valor é: ' + valorUm)

        entradaDeDados.question("Favor digitar o seu segundo valor:", function (valorDois) {
            console.log('O segundo valor é: ' + valorUm)

            entradaDeDados.question("Favor digitar o seu terceiro valor:", function (valorTres) {
               

        
               let valor = Number(valorUm)+Number(valorDois)+Number(valorTres) 
               console.log("O resultado é: " + valor)
            })

        })   

    })
})
