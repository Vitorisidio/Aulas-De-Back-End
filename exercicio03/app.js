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

entradaDeDados.question('Digite o nome do usúario: ', function (nome) {
    let nomeUsuario = nome

    entradaDeDados.question('qual operação matemática deseja realizar?: ', function (formula) {
        let operador = formula

        entradaDeDados.question('Digite o PRIMEIRO numero para realizar a conta: ', function (primeiro) {
            let OperandoUM = primeiro

            entradaDeDados.question('Digite o SEGUNDO numero para realizar a conta: ', function (segundo) {
                let OperandoDois = segundo

                let calculos = require('./modulo/calculos.js')

                let erro = calculos.erros(nomeUsuario, operador, OperandoUM, OperandoDois)
                let resultado = calculos.operacao(operador, OperandoUM, OperandoDois)
                if(erro == false){
                    console.log(erro)
                    entradaDeDados.close()
                }else{
                    console.log(resultado.toFixed(2))
                }



            })
        })
    })
})
