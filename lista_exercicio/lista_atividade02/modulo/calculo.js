const media = (nota1, nota2, nota3) => (Number(nota1) + Number(nota2) + Number(nota3)) / 3

const calculo = function (nota1, nota2, nota3) {

    let resultado = media(nota1, nota2, nota3)
    if (resultado >= 70) {
        console.log('aprovado', resultado.toFixed(1))
    } else if (resultado < 50) {
        console.log('Reprovado', resultado.toFixed(1))
    } else {
        console.log('Recuperação', resultado.toFixed(1))
        return resultado
    }

}

const mediaRecuperacao = (mediaAnterior, nota4) => (Number(mediaAnterior) + Number(nota4)) / 2

const reuperacacao = function (media, nota4) {

    let resultado = mediaRecuperacao(media, nota4)
    if (resultado >= 60) {
        console.log('aprovado', resultado.toFixed(1))
    } else {
        console.log('Reprovado', resultado.toFixed(1))
    }
}


module.exports = {
    calculo, reuperacacao
}