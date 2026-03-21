const infoEstados = require("./estados_cidades.js")


const getListaDeEstados = function () {
    //Cria um array vazio
    const listaUF = []
    // Começa como false (caso não encontre o estado)
    let resultado = false

    //Ele pega o arquivo estados_cidades.js e entra dentro de listaDeEstados -> estados E percorre cada estado (uf).
    infoEstados.listaDeEstados.estados.forEach(function (uf) {
        listaUF.push(uf.sigla)//Pega a sigla de cada estado e add no array 

        if (listaUF) {
            resultado = {
                uf: listaUF,
                quantidade: listaUF.length
            }
        }
    })
    return resultado
}


const getDadosEstado = function () {
    //varivel para filtro de siglas de estados 
    let nome = "SP"
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
    //varivel para filtro de siglas de estados 
    let nome = "SP"
    // Começa como false (caso não encontre o estado)
    let resultado = false

    // Percorre todos os estados do arquivo estados_cidades.js
    infoEstados.listaDeEstados.estados.forEach(function (capital) {
        // Compara a sigla do estado com o valor digitado (ignorando maiúscula/minúscula)
        if (String(capital.sigla).toLocaleUpperCase() == nome.toLocaleUpperCase()) {
            // Se encontrar, cria um objeto com os dados do estado
            resultado = {
                uf: capital.sigla,
                descricao: capital.nome,
                capital: capital.capital,
            }

        }

    })
    // Retorna o resultado (objeto com dados ou false se não encontrou)
    return resultado
}


const getEstadosRegiao = function () {
    //varivel para filtro de região 
    let regiaoFiltro = "nordeste"
    //Cria um array vazio
    let listaEstados = []
    // Começa como false (caso não encontre a região)
    let resultado = false

    // Percorre todos os estados do arquivo estados_cidades.js
    infoEstados.listaDeEstados.estados.forEach(function (estado) {
        // Compara a região com o valor digitado (ignorando maiúscula/minúscula)
        if (String(estado.regiao).toLocaleUpperCase() == regiaoFiltro.toLocaleUpperCase()) {
            // Adiciona o estado encontrado na lista
            listaEstados.push({
                uf: estado.nome,
                descricao: estado.nome
            })
            // Atualiza o resultado com a lista encontrada
            resultado = listaEstados

        }

    })
    // Retorna a lista de estados encontrados ou false caso não encontre nenhu
    return resultado

}

const getCapitalPais = function () {
    // Cria um array vazio para armazenar os estados que já foram capital do país
    let capitalPais = []
    // Começa como false (caso não encontre nenhuma capital do país)
    let resultado = false
    // Percorre todos os estados do arquivo estados_cidades.js
    infoEstados.listaDeEstados.estados.forEach(function (estado) {
        // Verifica se o estado possui informação de capital do país
        if (estado.capital_pais) {
            // Adiciona os dados do estado no array
            capitalPais.push({
                capital_atual: estado.capital_pais.capital,
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao,
                ano_inicio: estado.capital_pais.ano_inicio,
                ano_fim: estado.capital_pais.ano_fim
            })
            // Atualiza o resultado com a lista de capitais encontradas
            resultado = capitalPais
        }
    })

    // Verifica se foram encontradas capitais do país:
    // - Se sim, retorna um objeto contendo a lista de capitais
    // - Caso contrário, retorna false
    if (resultado) {
        return { capitais: resultado }
    } else {
        return false
    }

}

const getCidades = function () {
    // Variável para armazenar a sigla do estado que será filtrado
    let filtro = "ac"
    // Começa como false (caso não encontre o estado)
    let resultado = false

    // Percorre todos os estados do arquivo estados_cidades.js
    infoEstados.listaDeEstados.estados.forEach(function (estado) {
        // Compara a sigla do estado com o filtro (ignorando maiúscula/minúscula)
        if (String(estado.sigla).toLocaleUpperCase() == filtro.toLocaleUpperCase()) {
            // Cria um array vazio para armazenar os nomes das cidades
            let listaCidade = []
            // Percorre todas as cidades do estado encontrado
            estado.cidades.forEach(function (cidade) {
                // Adiciona apenas o nome da cidade no array
                listaCidade.push(cidade.nome)
            })
            // Monta o objeto final com os dados do estado e suas cidades
            resultado = {
                uf: estado.sigla,
                descricao: estado.nome,
                quantidade_cidades: estado.cidades.length,
                cidades: listaCidade
            }
        }

    })
    // Retorna:
    // - um objeto com os dados do estado e suas cidades, se encontrado
    // - false, caso o estado não seja encontrado
    return resultado
}


//TESTE DAS FUNÇÕES

//FUNÇÃO LISTA DE ESTADOS
const uf = getListaDeEstados()
console.log(uf)
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
