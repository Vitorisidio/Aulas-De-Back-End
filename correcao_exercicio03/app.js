/******************************************
 * Objetivo: Arquivo responsável pelas entradas e saida de dados da aplicação
 * Data:20/02/2026
 * Autor: vitor 
 * versão: 1.0
 * 
*******************************************/

const calculosMatematicos = require("./modulo/calcular.js")

let resposta = calculosMatematicos.calcular(10, 60, "somar")
console.log(resposta)
