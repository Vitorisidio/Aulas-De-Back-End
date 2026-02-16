

//LÓGICA DA ESCOLHA DO TIPO DE OPERAÇÃO + CÁLCULO
function operacao(contas, primeiroNumero, segundoNumero) {

    let operandoUM = Number(primeiroNumero)
    let operandoDois = Number(segundoNumero)

    if (contas == "soma") {
        return operandoUM + operandoDois
    } else if (contas == "subtração") {
        return operandoUM - operandoDois
    } else if (contas == "multiplicação") {
        return operandoUM * operandoDois
    } else if (contas == "divisão") {
        return operandoUM / operandoDois
    }
}

/* TRATAMENTO DE ERRO: 
CAMPOS VAZIOS
CAMPOS PREENCHIDO ERRADO(soma, subtração, divisão ou multiplicação)
CAMPOS PREENCHIDO ERRADO(APENAS ENTRADA DE NÚMEROS)
NÃO É PERMITIDO DIVIDIR POR ZERO
*/
function erros(entradaFormula, entradaPrimeiroNumero, entradasegundoNumero) {
    if (entradaFormula == '' || entradaPrimeiroNumero == '' || entradasegundoNumero == '') {
        console.log('ERRO: CAMPOS VAZIOS. Preencha TODOS os dados')
        return false
    } else if (entradaFormula !== 'soma' && entradaFormula !== 'subtração' && entradaFormula !== 'multiplicação' && entradaFormula !== 'divisão') {
        console.log('ERRO: CAMPOS PREENCHIDO ERRADO. Digite APENAS: soma, subtração, divisão ou multiplicação')
        return false
    } else if (isNaN(entradaPrimeiroNumero) || isNaN(entradasegundoNumero)) {
        console.log('ERRO: CAMPOS PREENCHIDO ERRADO. Preencha os dados com NÚMEROS')
        return false
    } else if (entradaFormula == "divisão" && Number(entradaPrimeiroNumero) == 0 || Number(entradasegundoNumero) == 0) {
        console.log('ERRO: NÃO É PERMITIDO DIVIDIR POR ZERO')
        return false
    }

}

//TRANSFORMA VIRGULA EM PONTO EM CASO DE CASAS DECIMAIS PARA PODER REALIZAR A CONTA
function decimais(virgula) {
        return virgula.replace(",", ".")
}

//torna as duas funções publicas para os arquivos do projeto Aula 3
module.exports = {
    operacao, erros, decimais
}

