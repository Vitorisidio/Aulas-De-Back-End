const readline = require("readline")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calcular = require("./modulo/calculo")
const validarDados = require("./modulo/tratativas")


entradaDeDados.question('Por favor digite a tabúada inicial: ', function (tabInicial) {
    let tabuadaInicial = Number(tabInicial) 

    entradaDeDados.question("Por favor digite a tabúada final: ", function (tabFinal) {
        let tabuadaFinal = Number(tabFinal)

        entradaDeDados.question("Por favor digite o número inicial da tabúada: ", function (numInicial) {
            let numeroInicial = Number(numInicial)

            entradaDeDados.question("Por favor digite o número Final da tabúada: ", function (numFinal) {
                let numeroFinal = Number(numFinal)

                if(validarDados.validarDados(tabuadaInicial, tabuadaFinal, numeroInicial, numeroFinal)){

                    calcular.calcular(tabuadaInicial, tabuadaFinal, numeroInicial, numeroFinal)

                }
                entradaDeDados.close()
            })
        })
    })
})