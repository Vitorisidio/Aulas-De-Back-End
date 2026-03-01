var readline = require("readline")

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const calculosMedia = require("./modulo/calculo.js")
const { validarDados, validarNotaExame } = require("./modulo/tratativas.js")
const exibirRelatorio  = require("./modulo/relatorio.js")



entradaDeDados.question('Por favor digite o Nome do Aluno: ', function (aluno) {
    let nomeAluno = aluno.toUpperCase()

    entradaDeDados.question("Por Favor digite o Nome do Professor: ", function (professor) {
        let nomeProfessor = professor.toUpperCase()

        entradaDeDados.question("Por Favor digitar o sexo do Aluno: ", function (sexoAluno) {
            let sexoDoAluno = sexoAluno.toUpperCase()

            entradaDeDados.question("Por Favor digitar o sexo do Professor: ", function (sexoProfessor) {
                let sexoDoProfessor = sexoProfessor.toUpperCase()

                entradaDeDados.question("Por Favor digite o Nome do Curso: ", function (curso) {
                    let nomeCurso = curso.toUpperCase()

                    entradaDeDados.question("Por Favor digite o Nome da disciplina: ", function (disciplina) {
                        let nomeDisciplina = disciplina.toUpperCase()

                        entradaDeDados.question("Por Favor digitar a primeira nota: ", function (valor1) {
                            let numeroUm = Number(valor1)

                            entradaDeDados.question("Por Favor digitar a segunda nota: ", function (valor2) {
                                let numeroDois = Number(valor2)

                                entradaDeDados.question("Por Favor digitar a terceira nota: ", function (valor3) {
                                    let numeroTres = Number(valor3)


                                    if (validarDados(nomeAluno, nomeProfessor, sexoDoAluno, sexoDoProfessor, nomeCurso, nomeDisciplina, numeroUm, numeroDois, numeroTres)) {
                                        let status = calculosMedia.calculo(numeroUm, numeroDois, numeroTres)

                                        if (status !== undefined) {
                                            entradaDeDados.question("Por Favor digitar a nota do exame: ", function (valor4) {
                                                let numeroQuatro = Number(valor4)

                                                if (validarNotaExame(numeroQuatro)) {
                                                    calculosMedia.reuperacacao(status, numeroQuatro)
                                                }
                                                entradaDeDados.close()
                                            })
                                        } else {
                                            entradaDeDados.close()
                                        }

                                    } else {
                                        entradaDeDados.close()
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

