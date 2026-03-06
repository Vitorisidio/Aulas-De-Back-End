const calcular = function (tabuadaInicial, tabuadaFinal, numeroInicial, numeroFinal) {
    let tabInicial = Number(tabuadaInicial)
    let tabFinal = Number(tabuadaFinal)
    let numInicial = Number(numeroInicial)
    let numFinal = Number(numeroFinal)
    let resultado

    for (tabInicial; tabInicial <= tabFinal; tabInicial++) {

        console.log("\n")
        for ( let reset = numInicial ; reset <= numFinal; reset++) {

            resultado = tabInicial * reset
            console.log(tabInicial + " x " + reset + ' = ' + resultado  )

        }

    }

}

module.exports = {calcular}
