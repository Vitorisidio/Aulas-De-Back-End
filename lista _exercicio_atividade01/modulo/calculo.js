const calcular = function (nomeAluno, pesoAluno, AlturaAluno) {

    let nome = String(nomeAluno)
    let peso = Number(pesoAluno)
    let altura = Number(AlturaAluno)

    let valorImc = imc(peso, altura)

    if (valorImc < 18.5) {
        console.log(`O IMC È ${valorImc.toFixed(2)} - ${nome} está abaixo do peso`)
    } else if (valorImc >= 18.5 && valorImc < 24.9) {
        console.log(`O IMC È ${valorImc.toFixed(2)} - ${nome} tem peso normal`)
    } else if (valorImc >= 25 && valorImc < 29.9) {
        console.log(`O IMC È ${valorImc.toFixed(2)} - ${nome} está Acima do peso (sobrepeso)`)
    } else if (valorImc >= 30 && valorImc < 34.9) {
        console.log(`O IMC È ${valorImc.toFixed(2)} - ${nome} tem Obisidade I`)
    } else if (valorImc >= 35 && valorImc < 39.9) {
        console.log(`O IMC È ${valorImc.toFixed(2)} - ${nome} tem Obisidade II`)
    } else{
        console.log(`O IMC È ${valorImc.toFixed(2)} - ${nome} tem Obisidade III`)
    }


}

// Converte altura de centímetros para metros
const converterMetros = function (alturaCm) {
    return Number(alturaCm) / 100
}
//função que calcula o imc
const imc = function (pesoAluno, alturaAluno) {

    // Converte a altura recebida em centimetros para metros usando a função (converterMetros)
    let alturaMetros = converterMetros(alturaAluno)

    //Fórmula que calcula e retorna o resultado do IMC
    return Number(pesoAluno) / (alturaMetros * alturaMetros)
}

module.exports = {
    calcular
}

/*
fazer as seguintes trativas de erro

Texto no lugar de número

Campo vazio

Número negativo

Número zero

Altura em formato errado

*/