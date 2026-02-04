/*------------------------------------------------------------
* Objetivo: Calcular médias escolares
* Data: 29/09/2026
* Autor: Vitor
* Versão: 1.0
------------------------------------------------------------*/

/*
Existem 3 formas de criação de variáeveis:

var -> Permite a criação de um espaço na memória do tipo variável. 
        Foi muito utilizado em projetos antigos.
        Recomendação: Caso você queira utilizar,
        recomenda-se na criação de variáveis globais(inicio do código)

let -> Permite a criação de um espaço na memória do tipo variável. 
        A utilização deste padrão é para a criação dentro de blocos de programação  {  }.
        Essa variável nasce e morre dentro deste bloco.
        Não é recomendado a sua utilização em escopo global.

const -> Permite a criação de um espaço na memória
        onde não sofrera alteração durante o código. 
        A const pode ser utilizado dentro e fora de bloco {  }.

Dica: caso vc queira diferenciar uma const, um var e um let. A const você pode criar com letras MAIUSCULAS
*/


const readline = require('readline')

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada nome
entradaDeDados.question('Digite o nome do aluno:', function (nome) {
    let nomeAluno = nome // recebe o nome do aluno que foi digitado

    //Entrada nota 1
    entradaDeDados.question('Digite a nota 1: ', function (valor1) {
        let nota1 = valor1

        //Entrada nota 2
        entradaDeDados.question('Digite a nota 2: ', function (valor2) {
            let nota2 = valor2

            //Entrada nota 3
            entradaDeDados.question('Digite a nota 3: ', function (valor3) {
                let nota3 = valor3

                //Entrada nota 4
                entradaDeDados.question('Digite a nota 4: ', function (valor4) {
                    let nota4 = valor4

                    //tratamento de Dados

                    /*
                    Operadores de comparação
                    == -> permite comparar a igualdade de duas variáveis
                    < -> permite comparar valores menores
                    > -> permite comparar valores maiores
                    >= -> permite comparar valores maiores ou iguais
                    <= -> permite comparar valores menore ou iguais
                    != -> permite comparar a diferença entre conteúdos
                    === -> permite comparar o conteudo e a tipagem de dado
                    !== -> permite comparar a diferença de conteúdo e a igualdade de tipos de dado
                    ==! -> permite comparar a igualdade de conteúdo e a diferença de tipos de dado
                    !=! -> permite comparar a diferença de conteúdo e a diferença de tipos de dado
                    */

                    // VALIDAÇÃO DE ENTRADAS VAZIA
                    if(nomeAluno == '' || nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                        console.log('ERRO: É OBRIGATÓRIO O PREENCHIMENTO DE TODS OS DADOS!!!')
                        //Validação limitada de notas
                    }else if( nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100){
                        console.log('ERRO: AS NOTAS TEM QUE SER DE 0 ATÉ 100')

                        /*
                        Validação para entrada de erro nas notas
                        isNaN() permite validar se o conteúdo da
                        váriavel tem algum caracter ao invés de número
                        */
                    }else if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                        console.log('ERRO: NÃO É POSSIVEL CALCULAR A MÉDIA COM A ENTRADA DE LETRAS. POR FAVOR DIGITE APENAS NUMEROS')
                    }else{

                        /*
                        conversões de tipos de dados
                        parse Int() Permite converter uma String para um Número INTEIRO
                        parse Float() Permite converter uma String para um Número DECIMAL
                        Number() Permite converter uma String para um Número (INTEIRO OU DECIMAL)
                        toFixed() Permite fixar a quantidade de casas decimais.
                        */
                       //Calculo da média
                       let statusAluno
                       let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4) )/4
                       
                       
                       if( media >= 70){
                           statusAluno = 'aprovado'
                        }else if ( media >= 50 && media < 70){
                            statusAluno = 'recuperação'
                        }else{
                            statusAluno = 'reprovado'
                        }
                        console.log('A média do Aluno ' + nomeAluno + " é: " + media.toFixed(2) + ' e está ' + statusAluno)
                   }
                   
                    })//fecha nota 4
                
            })//fecha nota 3

        })//fecha nota 2

    })//fecha nota 1

})//fecha nome
