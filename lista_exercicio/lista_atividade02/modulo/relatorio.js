function sexo(sexoDoProfessor, sexoDoAluno) {

    sexoDoProfessor = sexoDoProfessor.toUpperCase()
    sexoDoAluno = sexoDoAluno.toUpperCase()

    let professor
    let aluno

    if (sexoDoProfessor == "FEMININO") {
        professor = "Professora"
    } else if (sexoDoProfessor == "MASCULINO") {
        professor = "Professor"
    }

    if (sexoDoAluno == "FEMININO") {
        aluno = "A Aluna"
    } else if (sexoDoAluno == "MASCULINO") {
        aluno = "O Aluno"
    }
    return { professor, aluno }
}

function relatorio(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, numeroUm, numeroDois, numeroTres, status) {
    let generos = sexo(sexoProfessor, sexoAluno)

    console.log("================================================================================================")
    console.log(generos.aluno + " " + nomeAluno + ' foi ' + status.situacao + ' na disciplina ' + nomeDisciplina)
    console.log('Curso: ' + nomeCurso)
    console.log(`Disciplina: ${nomeDisciplina}`)
    console.log(generos.professor + ": " + nomeProfessor)
    console.log('notas ' + numeroUm, numeroDois, numeroTres)
    console.log('Média Final ' + status.media.toFixed(2))
    console.log("================================================================================================")

}

function relatorioExame(nomeAluno, nomeProfessor, sexoProfessor, sexoAluno, nomeCurso, nomeDisciplina, numeroUm, numeroDois, numeroTres, numeroQuatro, status) {
    let generos = sexo(sexoProfessor, sexoAluno)

    console.log("================================================================================================")
    console.log(generos.aluno + " " + nomeAluno + ' Está de ' + status.situacao + ' na disciplina ' + nomeDisciplina)
    console.log('Curso ' + nomeCurso)
    console.log(`Disciplina: ${nomeDisciplina}`)
    console.log(generos.professor + ": " + nomeProfessor)
    console.log('notas ' + numeroUm, numeroDois, numeroTres, numeroQuatro)
    console.log('nota do exame ' + numeroQuatro)
    console.log('Média Final ' + status.media.toFixed(2))
    console.log("================================================================================================")

}

module.exports = { relatorio, relatorioExame } 