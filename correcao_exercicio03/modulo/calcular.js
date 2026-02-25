/******************************************
 * Objetivo: Arquivo responsável pelas funções de calcular(Somar, subtrair, múltiplicar e dividir)
 * Data:20/02/2026
 * Autor: vitor 
 * versão: 1.0
 * 
*******************************************/
//toLowercase() -> Retorna a string em minusculo
//toUppercase() -> Retorna a string em MAIUSCULO
//modelo de função anonima
// calcular as 4 operações matemáticas
const calcular = function (numero1, numero2, operador) {

    //Entrada
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let resultado = false
    let operadorMatematico = String(operador).toUpperCase()

    //processamento da função

    // if(operadorMatematico == 'SOMAR'){
    //     resultado = valor1 + valor2
    // }else if( operadorMatematico == 'SUBTRAIR'){
    //     resultado = valor1 - valor2
    // }else if( operadorMatematico == 'MULTIPLICAR'){
    //     resultado = valor1 * valor2
    // }else if( operadorMatematico == 'DIVIDIR'){
    //     resultado = valor1 / valor2
    // }


// OUTRA fomra de fazer o processamento da função
    switch (operadorMatematico) {
        case 'SOMAR':
            resultado = somar(valor1, valor2)
            break;
        case 'SUBTRAIR':
            resultado = subtrair(valor1, valor2)
            break;
        case 'MULTIPLICAR':
            resultado = multiplicar(valor1, valor2)
            break;
        case 'DIVIDIR':
            resultado = dividir(valor1, valor2)
            break;
    }
    //Saída
    return resultado
}
//4 funções no metodo seta para realizar as operações matemáticas
const somar =           (numero1, numero2) => Number(numero1) + Number(numero2)
const subtrair =        (numero1, numero2) => Number(numero1) - Number(numero2)
const multiplicar =     (numero1, numero2) => Number(numero1) * Number(numero2)
const dividir =         (numero1, numero2) => Number(numero1) / Number(numero2)




module.exports ={
    calcular,
    somar,
    subtrair,
    multiplicar,
    dividir
}