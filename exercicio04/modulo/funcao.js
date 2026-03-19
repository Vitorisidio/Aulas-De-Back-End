const infoEstados = require("./estados_cidades.js")


const getListaDeEstados = function (){
    //Cria um array vazio
    const listaUF = []
    
    //Ele pega o arquivo estados_cidades.js e entra dentro de listaDeEstados -> estados E percorre cada estado (uf).
    infoEstados.listaDeEstados.estados.forEach(function(uf){
        listaUF.push(uf.sigla)//Pega a sigla de cada estado e add no array 
    })
 return listaUF
} 


const getDadosEstado = function(){
    let nome = "mg"
    let resultado = false

    infoEstados.listaDeEstados.estados.forEach(function(estado){
        if(String(estado.sigla).toLocaleUpperCase() == nome.toLocaleUpperCase()){
            resultado ={uf: estado.sigla,
                        descricao: estado.nome,
                        capital: estado.capital,
                        regiao: estado.regiao
            }

        }

    })
    return resultado
}

const getCapitalEstado = function(){
    let nome = "AC"
    let resultado = false

    infoEstados.listaDeEstados.estados.forEach(function(capital){
        if(String(capital.sigla).toLocaleUpperCase() == nome.toLocaleUpperCase()){
            resultado ={uf: capital.sigla,
                        descricao: capital.nome,
                        capital: capital.capital,
            }

        }

    })
    return resultado
}

//TESTE DAS FUNÇÕES

//FUNÇÃO LISTA DE ESTADOS
const uf = getListaDeEstados()
console.log(uf)
console.log("quantidade: " + uf.length )
console.log("\n")

//FUNÇÃO DADOS DE UM ESTADO ESPECIFICO
const estado = getDadosEstado()
console.log(estado)
console.log("\n")

//FUNÇÃO INFO REFERENTE A CAPITAL DE UM ESTADO ESPECIFICO
const capital = getCapitalEstado()
console.log(capital)
console.log("\n")

