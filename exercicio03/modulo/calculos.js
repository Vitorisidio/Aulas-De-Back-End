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

function erros(entradaNome, entradaFormula, entradaPrimeiroNumero, entradasegundoNumero) {

    if (entradaFormula == '' || entradaNome == '' || entradaPrimeiroNumero == '' || entradasegundoNumero == '') {
        console.log('ERRO: CAMPOS VAZIOS. Preencha TODOS os dados')
        return false
    } else if ( entradaFormula !== 'soma' && entradaFormula !== 'subtração' && entradaFormula !== 'multiplicação' && entradaFormula !== 'divisão'){
        console.log('ERRO: CAMPOS PREENCHIDO ERRADO. Digite APENAS: soma, subtração, divisão ou multiplicação')
        return false
    } else if (isNaN(entradaPrimeiroNumero) || isNaN(entradasegundoNumero)) {
        console.log('ERRO: CAMPOS PREENCHIDO ERRADO. Preencha os dados com NÚMEROS')
        return false
    }
   
    }

//torna as duas funções publicas para os arquivos do projeto Aula 3
module.exports = {
    operacao, erros
}

