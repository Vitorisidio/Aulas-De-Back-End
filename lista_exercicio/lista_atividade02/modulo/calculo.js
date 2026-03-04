const media = (nota1, nota2, nota3) => (Number(nota1) + Number(nota2) + Number(nota3)) / 3

const calculo = function (nota1, nota2, nota3) {

    let resultado = media(nota1, nota2, nota3)
    let situacao

    if (resultado >= 70) {
        return { situacao: "APROVADO", media: resultado }
    } else if (resultado < 50) {
        return { situacao: "REPROVADO", media: resultado }
    } else {
        return { situacao: "RECUPERAÇÃO", media: resultado }
    }
}

const mediaRecuperacao = (mediaAnterior, nota4) => (Number(mediaAnterior) + Number(nota4)) / 2

const reuperacacao = function (media, nota4) {

    let resultado = mediaRecuperacao(media, nota4)
    let situacao
    if (resultado >= 60) {
        situacao = "APROVADO"
    } else {
        situacao = "REPROVADO"
    }
    return { situacao, media: resultado }
}


module.exports = {
    calculo, reuperacacao
}