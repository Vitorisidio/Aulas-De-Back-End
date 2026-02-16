/*
*Objetivo: Cirair um sistema que permite o calculo de juros utilizando boas prática com funções
*Autor: Vitor Isidio
*Data: 13/02/2025
*Versão: 1.0
*/


const console = require('console')
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

    entradaDeDados.question('qual operação matemática deseja realizar?: ', function (formula) {
        let operador = formula

        entradaDeDados.question('Digite o PRIMEIRO numero para realizar a conta: ', function (primeiro) {
            let OperandoUM = primeiro

            entradaDeDados.question('Digite o SEGUNDO numero para realizar a conta: ', function (segundo) {
                let OperandoDois = segundo

                let calculos = require('./modulo/calculos.js')  // Importa o arquivo calculos.js.
                                                                // Assim a lógica dos cálculos fica separada do app.js.
                                                                // O app apenas chama as funções e recebe o resultado.

                // Corrige vírgula para ponto nos números digitados
                OperandoUM = calculos.decimais(OperandoUM)
                OperandoDois = calculos.decimais(OperandoDois)

                // Executa a operação matemática escolhida
                let resultado = calculos.operacao(operador, OperandoUM, OperandoDois)

                // Valida os dados informados (verifica erros)
                let erro = calculos.erros(operador, OperandoUM, OperandoDois)
                
                if (erro == false) {
                    // Se houver erro, encerra o programa
                    console.log(erro)
                    entradaDeDados.close()
                } else {
                    // Se não houver erro, mostra o resultado formatado com 2 casas decimais
                    console.log(resultado.toFixed(2))
                    entradaDeDados.close()
                }

            })
        })
    })
