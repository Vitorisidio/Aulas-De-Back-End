/*
*Objetivo: Cirair um sistema que permite o calculo de juros utilizando boas prática com funções
*Autor: Vitor Isidio
*Data: 11/02/2025
*Versão: 1.0
*


*/

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o nome do cliente: ', function (nome) {
    let nomeCliente = nome

    entradaDeDados.question('Digite o nome do produto: ', function (produto) {
        let nomeProduto = produto

        entradaDeDados.question('Digite o valor do produto: ', function (capital) {
            let capitalProduto = capital

            entradaDeDados.question('Digite o valor da taxa de juros: ', function (taxa) {
                let taxacompra = taxa

                entradaDeDados.question('Digite o tempo para realizar o pagamento: ', function (tempo) {
                    let tempoPagamento = tempo

                    let montante = calcularJurosCompostos(capitalProduto, taxacompra, tempoPagamento)

                    if(montante){
                        console.log('O montante final é: ' + montante.toFixed(2))
                    }else{
                        console.log('O PROGRAMA FOI ENCERRADO POR CABAÇICE SUA SEU OTARIO')
                        entradaDeDados.close()
                    }

                })
            })
        })
    })
})

// Criando uma função para calcular o Valor da compra parcelado
// Metodo tradicional de criar uma função

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
