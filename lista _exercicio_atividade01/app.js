var readline = require("readline")

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calculosImc = require("./modulo/calculo.js")



entradaDeDados.question('Por favor digite o seu nome: ', function (nomeUsuario) {

    entradaDeDados.question("Por Favor digitar o seu peso: ", function (pesoUsuario) {

        entradaDeDados.question("Por Favor digitar a sua Altura em CENTIMETROS: ", function (alturaUsuario) {

            calculosImc.calcular(nomeUsuario, pesoUsuario, alturaUsuario)

                entradaDeDados.close()
        })
    })
})