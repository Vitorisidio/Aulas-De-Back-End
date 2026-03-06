function validarDados(tabuadaInicial, tabuadaFinal, numeroInicial, numeroFinal) {

    if (tabuadaInicial == "" || tabuadaFinal == "" || numeroInicial == "" || numeroFinal == "") {
        console.log('ERRO: Campos vazios não são permitidos.')
        return false
    }

    if (tabuadaInicial < 2 || tabuadaInicial > 100) {
        console.log('ERRO: Somente permitido números de 2 a 100 na tabuada Inicial')
        return false
    }

    if (tabuadaFinal < 2 || tabuadaFinal > 100) {
        console.log('ERRO: Somente permitido números de 2 a 100 na tabuada Final')
        return false
    }

    if (numeroInicial < 1 || numeroInicial > 50) {
        console.log('ERRO: Somente permitido números de 1 a 50 no Número Inicial ')
        return false
    }

    if (numeroFinal < 1 || numeroFinal > 50) {
        console.log('ERRO: Somente permitido números de 1 a 50 no Número Final ')
        return false
    }

    if (tabuadaInicial > tabuadaFinal) {
        console.log('ERRO: A tabuada inicial não pode ser maior que a final')
        return false
    }

    if (numeroInicial > numeroFinal) {
        console.log('ERRO: O número inicial não pode ser maior que o final')
        return false
    }

        if ( isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(numeroInicial) || isNaN(numeroFinal)) {
        console.log('ERRO: APENAS NÚMEROS SÃO ACEITOS')
        return false
    }

    return true

}

module.exports = {
    validarDados
}