/*
*Objetivo: Cirair um sistema que permite o calculo de juros utilizando boas prática com funções
*Autor: Vitor Isidio
*Data: 11/02/2025
*Versão: 1.0
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

                    let calculos = require('./modulo/calculos.js')

                    let montante = calculos.calcularJurosCompostos(capitalProduto, taxacompra, tempoPagamento)

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


