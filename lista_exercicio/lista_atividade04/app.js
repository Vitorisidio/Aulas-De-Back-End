const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


const calculo = require("./modulo/calculo")
const validarDados = require("./modulo/tratativas")

entradaDeDados.question('Por favor digite um numero para poder fatorar: ', function (fatorial) {
    let fatorando = fatorial

    if (validarDados.tratativa(fatorando)) {
        calculo.calcular(Number(fatorando))
    }

    entradaDeDados.close()

})
