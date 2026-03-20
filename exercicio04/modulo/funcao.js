const infoEstados = require("./estados_cidades.js")


const getListaDeEstados = function () {
    //Cria um array vazio
    const listaUF = []

    //Ele pega o arquivo estados_cidades.js e entra dentro de listaDeEstados -> estados E percorre cada estado (uf).
    infoEstados.listaDeEstados.estados.forEach(function (uf) {
        listaUF.push(uf.sigla)//Pega a sigla de cada estado e add no array 
    })
    return listaUF
}


const getDadosEstado = function () {
    //varivel para filtro de siglas de estados 
    let nome = "mg"
    // Começa como false (caso não encontre o estado)
    let resultado = false

    // Percorre todos os estados do arquivo estados_cidades.js
    infoEstados.listaDeEstados.estados.forEach(function (estado) {
        // Compara a sigla do estado com o valor digitado (ignorando maiúscula/minúscula)
        if (String(estado.sigla).toLocaleUpperCase() == nome.toLocaleUpperCase()) {
            // Se encontrar, cria um objeto com os dados do estado
            resultado = {
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao
            }

        }

    })
    // Retorna o resultado (objeto com dados ou false se não encontrou)
    return resultado
}

const getCapitalEstado = function () {
    let nome = "rj"
    let resultado = false

    infoEstados.listaDeEstados.estados.forEach(function (capital) {
        if (String(capital.sigla).toLocaleUpperCase() == nome.toLocaleUpperCase()) {
            resultado = {
                uf: capital.sigla,
                descricao: capital.nome,
                capital: capital.capital,
            }

        }

    })
    return resultado
}


const getEstadosRegiao = function () {

    let regiaoFiltro = "nordeste"
    let listaEstados = []


    infoEstados.listaDeEstados.estados.forEach(function (estado) {
        if (String(estado.regiao).toLocaleUpperCase() == regiaoFiltro.toLocaleUpperCase()) {
            listaEstados.push({
                uf: estado.nome,
                descricao: estado.nome
            })

        }

    })

    if (listaEstados.length == 0) {
        return false
    } else {
        return {
            regiao: regiaoFiltro.toUpperCase(),
            estados: listaEstados
        }
    }

}

const getCapitalPais = function () {
    let resultado = []

    infoEstados.listaDeEstados.estados.forEach(function (estado) {
        if (estado.capital_pais) {
            resultado.push({
                capital_atual: estado.capital_pais.capital,
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
                ano_inicio: estado.capital_pais.ano_inicio,
                ano_fim: estado.capital_pais.ano_fim
            })
        }
    })

    if (resultado.length == 0) {
        return false;
    } else {
        return { capitais: resultado };
    }
}

const getCidades = function () {
    let filtro = "df"
    let resultado = []

    infoEstados.listaDeEstados.estados.forEach(function (estado) {
        if(String(estado.sigla).toLocaleUpperCase() == filtro.toLocaleUpperCase()){
            resultado.push ({cidades: estado.cidades})
        }

    })

    return resultado
}


//TESTE DAS FUNÇÕES

//FUNÇÃO LISTA DE ESTADOS
const uf = getListaDeEstados()
console.log(uf)
console.log("quantidade: " + uf.length)
console.log("\n")

//FUNÇÃO DADOS DE UM ESTADO ESPECIFICO
const estado = getDadosEstado()
console.log(estado)
console.log("\n")

//FUNÇÃO REFERENTE A CAPITAL DE UM ESTADO ESPECIFICO
const capitalEstado = getCapitalEstado()
console.log(capitalEstado)
console.log("\n")

//FUNÇÃO REFERENTE as informações aos estados
const regiao = getEstadosRegiao()
console.log(regiao)
console.log("\n")

//FUNÇÃO REFERENTE as informações aos estados que ja foram capitais do Brasil
const capitalPais = getCapitalPais()
console.log(capitalPais)
console.log("\n")

//FUNÇÃO REFERENTE as informações aos estados que ja foram capitais do Brasil
const listaCidade = getCidades()
console.log(listaCidade)
console.log("\n")
