function validarDados(nome, peso, altura){

    if(!nome || !peso || !altura){
        console.log('ERRO: Campos vazios não são permitidos.')
        return false
    }

    if(isNaN(peso) || isNaN(altura)){
        console.log('ERRO:NO CAMPO DE ALTURA E PESO, SÓ É PERMITIDO NÚMEROS.')
        return false
    }

    if(!isNaN(nome)){
        console.log('ERRO: NO CAMPO DE NOME, SÓ É PERMITIDO LETRAS.')
        return false
    }

    if(peso <=0 || altura <=0){
        console.log('ERRO: NÃO É PERMITIDO PESO E ALTURA IGUAL A ZERO OU VALORES NEGATIVOS.')
        return false
    }

    if(altura.includes('.') || altura.includes(',')){
        console.log('ERRO: DIGITE A ALTURA EM CENTIMETROS.')
        return false
    }

    return true

}

module.exports = validarDados