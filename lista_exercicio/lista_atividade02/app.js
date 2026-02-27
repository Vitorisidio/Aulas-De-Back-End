var readline = require("readline")

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calculosMedia = require("./modulo/calculo.js")


entradaDeDados.question('Por favor digite o Nome do Aluno: ', function (aluno) {

    entradaDeDados.question("Por Favor digite o Nome do Professor: ", function (professor) {

        entradaDeDados.question("Por Favor digitar o sexo do Aluno: ", function (sexoAluno) {

            entradaDeDados.question("Por Favor digitar o sexo do Professor: ", function (sexoProfessor) {

                entradaDeDados.question("Por Favor digite o Nome do Curso: ", function (curso) {

                    entradaDeDados.question("Por Favor digite o Nome da disciplina: ", function (disciplina) {

                        entradaDeDados.question("Por Favor digitar a primeira nota: ", function (valor1) {

                            entradaDeDados.question("Por Favor digitar a segunda nota: ", function (valor2) {

                                entradaDeDados.question("Por Favor digitar a terceira nota: ", function (valor3) {

                                    calculosMedia.calculo(valor1, valor2, valor3)
                                    if(calculosMedia == false ){
                                        entradaDeDados.question("Por Favor digitar a quarta nota: ", function (valor4) {
                                            
                                        })
                                    }

                                })

                            })

                        })

                    })

                })

            })

        })
    })
})

