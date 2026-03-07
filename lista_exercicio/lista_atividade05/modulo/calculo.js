const numero = function (numeroInicial, numeroFinal) {

    let contadorPar = 0
    let contadorImpar = 0
    let listaPar = ""
    let listaImpar = ""

    for (let contador = numeroInicial; contador <= numeroFinal; contador++) {

        if (contador % 2 == 0) {
            listaPar = listaPar + contador + "\n"
            contadorPar++
        } else {
            listaImpar = listaImpar + contador + "\n"
            contadorImpar++
        }

    }

    console.log("Números pares: " + "\n" + listaPar)
    console.log("Quantidade de pares: " + contadorPar + "\n")

    console.log("Números ímpares: " + "\n" + listaImpar)
    console.log("Quantidade de ímpares: " + contadorImpar + "\n")

}


module.exports = {
    numero
}