const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const validarDados = require("./modulo/tratativa")
const calculo = require("./modulo/calculo")

entradaDeDados.question('Por favor digite um numero inicial de 0 até 500: ', function (inicio) {
    let numeroInicial = inicio
    entradaDeDados.question('Por favor digite um numero final de 100 até 1000: ', function (final) {
        let numeroFinal = final

        if (validarDados.tratativa(numeroInicial, numeroFinal)) {

            calculo.numero(numeroInicial, numeroFinal)

        }
        entradaDeDados.close()

    })
})
