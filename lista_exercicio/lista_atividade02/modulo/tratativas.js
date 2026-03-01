function validarDados(nomeAlunos, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3) {

    if (!nomeAlunos || !nomeProfessor || !sexoAluno || !sexoProfessor || !nomeCurso || !nomeDisciplina) {
        console.log('ERRO: Campos de texto vazios não são permitidos.')
        return false
    }

    if (!isNaN(nomeAlunos) || !isNaN(nomeProfessor) || !isNaN(sexoAluno) || !isNaN(sexoProfessor) || !isNaN(nomeCurso) || !isNaN(nomeDisciplina)) {
        console.log('ERRO: Campos de texto só é permitido letras.')
        return false
    }

    if (nota1 == "" || nota1 == undefined || nota2 == "" || nota2 == undefined || nota3 == "" || nota3 == undefined) {
        console.log('ERRO: Campos de Notas vazios não são permitidos.')
        return false
    }

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        console.log('ERRO: Campos de Notas só é permitido números')
        return false
    }

    if (Number(nota1) < 0 || Number(nota1) > 100 || Number(nota2) < 0 || Number(nota2) > 100 || Number(nota3) < 0 || Number(nota3) > 100) {

        console.log('ERRO: Nota deve estar entre 0 e 100.')
        return false
    }
    return true

}

function validarNotaExame(nota4) {

    if (nota4 === "" || nota4 === undefined) {
        console.log("ERRO: A nota do exame deve ser preenchida.")
        return false
    }

    if (isNaN(nota4)) {
        console.log("ERRO: A nota do exame deve ser um número.")
        return false
    }

    if (Number(nota4) < 0 || Number(nota4) > 100) {
        console.log("ERRO: A nota do exame deve estar entre 0 e 100.")
        return false
    }

    return true
}





module.exports = {
    validarDados,
    validarNotaExame
}