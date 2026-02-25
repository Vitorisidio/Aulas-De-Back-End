/******************************************
 * Objetivo: Arquivo responsável por gerar a tabuada de um número
 * Data:25/02/2026
 * Autor: vitor 
 * versão: 1.0
 *******************************************/

const calculosMatematicos = require("./calcular.js")

//função pra imprimir a tabuada usando while

const gerarTabuada = function (tabuada) {
    //recebe a tabuada a ser gerada
    let tab = Number(tabuada)

    let cont = 0
    let resultado
    //Repetição para gerar a tabuada até 10
    while (cont <= 10) {
        //chama a função de multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} x ${cont} = ${resultado}`)

        cont++
    }
}

gerarTabuada(10)




//função pra imprimir a tabuada usando For

const gerarTabuadaFor = function (tabuada) {
    //recebe a tabuada a ser gerada
    let tab = Number(tabuada)

    //let cont = 0
    let resultado

    //Repetição para gerar a tabuada até 10
    for (let cont = 0; cont <= 10; cont++) {
        //chama a função de multiplicar para realizar a operação
        resultado = calculosMatematicos.multiplicar(tab, cont)
        console.log(`${tab} x ${cont} = ${resultado}`)
    }
}

gerarTabuadaFor(5)
