
let empresa = 'Viva Moda'

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('por favor digite o seu nome:', function (nomeUsuario) {

    entradaDeDados.question('por favor digite o nome do produto:', function (nomeProduto) {

        if (!isNaN(nomeProduto)) {
            console.log("Digite Um produto da loja")
            entradaDeDados.close()
            return
        }
        entradaDeDados.question('por favor digite o valor da compra: ', function (ValorDaCompra) {

            if (isNaN(ValorDaCompra)) {
                console.log("Digite um número válido para o valor da compra!")
                entradaDeDados.close()
                return
            } else if (Number(ValorDaCompra) <= 0) {
                console.log("Digite um número maior que ZERO")
                entradaDeDados.close()
                return
            }

            entradaDeDados.question('por favor digite o taxa de juros ', function (taxaDeJuros) {

                if (isNaN(taxaDeJuros) || Number(taxaDeJuros) < 0 || Number(taxaDeJuros) > 100) {
                    console.log("Taxa de juros inválida!")
                    entradaDeDados.close()
                    return
                }
                let taxa = Number(taxaDeJuros) / 100;
                console.log(taxa)


                entradaDeDados.question('por favor digite a quantidade de parcelas: ', function (parcelas) {

                    if (isNaN(parcelas) || Number(parcelas) <= 0) {
                        console.log("Tempo de pagamento inválido!")
                        entradaDeDados.close()
                        return
                    }
                    let valorFinal = Number(ValorDaCompra) * ((1 + Number(taxa)) ** parcelas)
                    console.log(valorFinal)

                    let valorParcelas = Number(valorFinal) / Number(parcelas)
                    let acrescimo = valorFinal - ValorDaCompra



                    console.log("----------------------" + empresa + "---------------------------")
                    console.log("Muito obrigado por realizar a sua compra conosco Sr(a): " + nomeUsuario)
                    console.log("A compra do produto: " + nomeProduto + " Tem um valor de: " + ValorDaCompra)
                    console.log("A sua compra será parcelada em: " + parcelas + " vezes e o Sr(a) pagará: " + valorParcelas.toFixed(2))
                    console.log("O acréscimo realizado ao valor de: " + ValorDaCompra + "será de: " + acrescimo.toFixed(2))
                    console.log("Muito obrigado por escolher a " + empresa)
                    console.log("-----------------------------------------------------------------")

                })

            })

        })
    })
})
