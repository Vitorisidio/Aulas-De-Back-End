
const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('por favor digite o seu nome:', function (nomeUsuario) {
    let nome
    entradaDeDados.question('por favor digite o valor da compra: ', function (ValorDaCompra) {

        entradaDeDados.question('por favor digite o taxa de juros ', function (taxaDeJuros) {

            entradaDeDados.question('por favor digite o tempo de pagamento: ', function (TempoDePagamento){
                console.log(nomeUsuario +''+ValorDaCompra +''+taxaDeJuros+''+TempoDePagamento)
            })

        })   

    })
})









/*
entradaDeDados.question('por favor digite o seu nome: ', function (nomeUsuario)

entradaDeDados.question('por favor digite o valor da compra: ', function (ValorDaCompra)

entradaDeDados.question('por favor digite o taxa de juros ', function (taxaDeJuros)

  let taxa = Number(taxaDeJuros) / 100;

entradaDeDados.question('por favor digite o tempo de pagamento: ', function (TempoDePagamento.)

 let montanteFinal = ValorDaCompra * (( 1 + Number(taxaDeJuros))**TempoDePagamento)
 */
