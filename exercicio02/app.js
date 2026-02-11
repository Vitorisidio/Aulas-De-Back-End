
let empresa = 'Viva Moda'

const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


entradaDeDados.question('por favor digite o seu nome:', function (nomeUsuario) {// abre nomeUsuario

    entradaDeDados.question('por favor digite o nome do produto:', function (nomeProduto) { // abre nomeProduto

        entradaDeDados.question('por favor digite o valor da compra: ', function (ValorDaCompra) { // Abre ValorDaCompra

            entradaDeDados.question('por favor digite o taxa de juros ', function (taxaDeJuros) {// abre taxaDeJuros

                entradaDeDados.question('por favor digite 1 para informar em mêses ou 2 para informar em anos: ', function (tempo) { //abre tempo

                    let taxa = Number(taxaDeJuros) / 100;// calculo da %

                    //---------------------------------------------------------TRATAMENTO DE ERROS---------------------------------//

                    if (!isNaN(nomeProduto)) {
                        console.log("Digite Um produto da loja")
                        entradaDeDados.close()

                    }

                    if (isNaN(ValorDaCompra)) {
                        console.log("Digite um número válido para o valor da compra!")
                        entradaDeDados.close()

                    } else if (Number(ValorDaCompra) <= 0) {
                        console.log("Digite um número maior que ZERO")
                        entradaDeDados.close()

                    }

                    if (isNaN(taxaDeJuros) || Number(taxaDeJuros) < 0 || Number(taxaDeJuros) > 100) {
                        console.log("Taxa de juros inválida!")
                        entradaDeDados.close()

                    }

                    if (isNaN(tempo) || tempo <= 0 || tempo > 2) {
                        console.log("Valor Invalido, escolha apenas 1 ou 2")
                        entradaDeDados.close()

                        //---------------------------------------------------------LOGICA------------------------------------------------------//

                        //---------------------------------------------------------LOGICA meses------------------------------------------------------//

                    } else if (tempo == 1) {


                        entradaDeDados.question('por favor digite a quantidade de parcelas EM MESES: ', function (parcelas/*a quantidade de parcelas em meses*/) {


                            if (isNaN(parcelas) || Number(parcelas) <= 0) {
                                console.log("valor de pagamento inválido!")
                                entradaDeDados.close()
                                return
                            }//trtativa de erro
                            let valorFinal = Number(ValorDaCompra) * ((1 + Number(taxa)) ** parcelas)// calculo do produto com a juros

                            let valorParcelas = Number(valorFinal) / Number(parcelas)// conta do valor das parcelas
                            let acrescimo = valorFinal - ValorDaCompra // quanto de juros foi add no valor da compra



                            console.log("----------------------" + empresa + "---------------------------")
                            console.log("Muito obrigado por realizar a sua compra conosco Sr(a): " + nomeUsuario)
                            console.log("A compra do produto: " + nomeProduto + " Tem um valor de: " + ValorDaCompra + " REAIS")
                            console.log("A sua compra será parcelada em: " + parcelas + " vezes e o Sr(a) pagará: " + valorParcelas.toFixed(2))
                            console.log("O acréscimo realizado ao valor de: " + ValorDaCompra + " REAIS será de: " + acrescimo.toFixed(2) + " REAIS")
                            console.log("VALOR TOTAL É DE " + valorFinal)
                            console.log("Muito obrigado por escolher a " + empresa)
                            console.log("-----------------------------------------------------------------")

                            entradaDeDados.close()
                            return
                        })

                        //---------------------------------------------------------LOGICA anos------------------------------------------------------//

                    } else if (tempo == 2) {


                        entradaDeDados.question('por favor digite a quantidade de parcelas EM ANOS: ', function (parcelas /*a quantidade de parcelas em anos*/) {

                            convercacao = parcelas * 12 // converter anos em meses

                            if (isNaN(parcelas) || Number(parcelas) <= 0) {
                                console.log("valor de pagamento inválido!")
                                entradaDeDados.close()
                                return
                            }//trtativa de erro
                            let valorFinal = Number(ValorDaCompra) * ((1 + Number(taxa)) ** (convercacao))// calculo do produto com a juros

                            let valorParcelas = Number(valorFinal) / Number(convercacao)// conta do valor das parcelas
                            let acrescimo = valorFinal - ValorDaCompra// quanto de juros foi add no valor da compra



                            console.log("----------------------" + empresa + "---------------------------")
                            console.log("Muito obrigado por realizar a sua compra conosco Sr(a): " + nomeUsuario)
                            console.log("A compra do produto: " + nomeProduto + " Tem um valor de: " + ValorDaCompra + " REAIS")
                            console.log("A sua compra será parcelada em: " + convercacao + " vezes e o Sr(a) pagará: " + valorParcelas.toFixed(2))
                            console.log("O acréscimo realizado ao valor de: " + ValorDaCompra + "REAIS será de: " + acrescimo.toFixed(2) + " REAIS")
                            console.log("VALOR TOTAL É DE " + valorFinal)
                            console.log("Muito obrigado por escolher a " + empresa)
                            console.log("-----------------------------------------------------------------")

                            entradaDeDados.close()
                            return
                        })
                    }
                })//fecha tempo
            })// fecha taxaDeJuros
        })// fecha ValorDaCompra
    })// fecha nomeProduto
})// fecha nomeUsuarios
