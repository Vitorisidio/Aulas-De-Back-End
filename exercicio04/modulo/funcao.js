const infoEstados = require("./estados_cidades.js")


const getListaDeEstados = function (estados){

    const listaUF = []

    infoEstados.listaDeEstados.estados.forEach(function(uf){
        listaUF.push(uf.sigla) 
    })
    console.log(listaUF)
    console.log("quantidade: " + listaUF.length)
    return {uf: listaUF,
        quantidades: listaUF.length
    }
} 

getListaDeEstados()



