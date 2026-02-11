/*
* Objetivo: Arquivo responsável pelas funções de Calculos para este projeto
*Autor: Vitor Isidio
*Data: 11/02/2025
*Versão: 1.0
*/

function calcularJurosCompostos(valorCompra, taxaJuros, tempoPagto) {

    //Recebe os argumentos da função em variáveis locais
    //As variaveis(valor, taxa e tempo são númericas por conta da conversão)
    // Mas os argumentos (valorCompra,taxaJuros,tempoPagto, ainda serão Strings)

    let valor = Number(valorCompra)
    let taxa = Number(taxaJuros)
    let tempo = Number(tempoPagto)

    //validação para entradas vazias ou de caracteres inválidos
    if (valorCompra == '' || isNaN(valorCompra) || tempoPagto == "" || isNaN(tempoPagto)) {
        console.log('ERRO: Valores de compra ou tempo de pagamento estão incorretos')
        return false
    } else {

        //chama a função para converter o número em percentual
        let percentual = calcularPercentual(taxa)

        // validação para o erro de percentual na função calcularPercentual()
        if (percentual) {
            let montante = valor * ((1 + percentual) ** tempo)
            return Number(montante.toFixed(2))
        } else {
            console.log('ERRO: Valor da taxa está incorreto')

            return false
        }

    }

}

//calcule o percentual de um número
function calcularPercentual(numero) {

    let numeroPercentual = Number(numero)

    if (numero == '' || numero <= 0 || isNaN(numero)) {
        return false
    } else {
        let percentual = numeroPercentual / 100
        return Number(percentual.toFixed(2))
    }

}
//torna as duas funções publicas para os arquivos do projeto Aula 3
module.exports ={
    calcularJurosCompostos,
    calcularPercentual
}