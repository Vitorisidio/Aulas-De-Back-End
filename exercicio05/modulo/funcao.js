import { contatos } from "./contatos.js"


const dadosGeral = function () {
    const lista = contatos
    if (lista) {
        return lista["whats-users"]
    } else {
        return false
    }

}
//console.log(dadosGeral())


const dadosUsuario = function (numero) {
    const listaDados = []
    let resultado = false
    contatos["whats-users"].forEach(function (usuario) {
        if ((usuario.number) == numero) {
            listaDados.push({
                account: usuario.account,
                nickname: usuario.nickname,
                dataCriacao: usuario["created-since"],
                imagemPerfil: usuario["profile-image"],
                numero: usuario.number,
                background: usuario.background,

            })
            resultado = true
        }
    })
    if (resultado) {
        return listaDados
    } else {
        return false
    }

}
//console.log(dadosUsuario('11966578996'))

const dadosContatos = function (numero) {
    const listaContatos = []
    let resultado = false
    contatos["whats-users"].forEach(function (usuario) {
        usuario.contacts.forEach(function (contato) {
            if ((usuario.number) == numero) {
                listaContatos.push({
                    nome: contato.name,
                    descricao: contato.description,
                    imagem: contato.image,
                })
                resultado = true
            }
        })
    })
    if (resultado) {
        return listaContatos
    } else {
        return false
    }

}
//console.log(dadosContatos('11966578996'))

const dadosMensagens = function (numero) {
    let listaContatos
    let resultado

    contatos["whats-users"].forEach(function (usuario) {
        if ((usuario.number) == numero) {
            resultado = true
            listaContatos = usuario
        }
    })
    if (resultado) {
        return listaContatos
    } else {
        return false
    }

}
//console.log(dadosMensagens('11987876567'))

const dadosconversa = function (nome, numero) {
    const listaConversa = []
    let resultado = false
    let dadosRemetente
    contatos["whats-users"].forEach(function (usuario) {
        if ((usuario.number) == numero) {
            dadosRemetente = {
                Id: usuario.id,
                account: usuario.account,
                nickname: usuario.nickname,
                created_since: usuario["created-since"],
                profile_image: usuario["profile-image"],
                number: usuario.number,
                background: usuario.background
            }
            usuario.contacts.forEach(function (contato) {
                if (contato.name == nome) {
                    contato.messages.forEach(function (mensagens) {
                        listaConversa.push({
                            nome: contato.name,
                            imagem: contato.image,
                            descricao: contato.description,
                            remetente: mensagens.sender,
                            conteudo: mensagens.content,
                            horario: mensagens.time
                        })
                        resultado = true
                    })
                }
            })

            dadosRemetente.conversas = listaConversa
        }
    })
    if (resultado) {
        return dadosRemetente
    } else {
        return false
    }

}
//console.log(dadosconversa("José Maria da Silva", '11966578996'))



const palavraChave = function (pesquisa, numero) {
    const palavra = []
    let resultado = false
    let pesquisaPalavraChave
    contatos["whats-users"].forEach(function (usuario) {
        if ((usuario.number) == numero) {
            pesquisaPalavraChave = {
                Id: usuario.id,
                account: usuario.account,
                nickname: usuario.nickname,
                created_since: usuario["created-since"],
                profile_image: usuario["profile-image"],
                number: usuario.number,
                background: usuario.background
            }
            usuario.contacts.forEach(function (contato) {
                contato.messages.forEach(function (mensagens) {
                    if (mensagens.content.toLowerCase().includes(pesquisa.toLowerCase())) {
                        palavra.push({
                            nome: contato.name,
                            imagem: contato.image,
                            descricao: contato.description,
                            remetente: mensagens.sender,
                            conteudo: mensagens.content,
                            horario: mensagens.time
                        })
                        resultado = true
                    }
                })
            })
            pesquisaPalavraChave.conversas = palavra
        }
    })
    if (resultado) {
        return pesquisaPalavraChave
    } else {
        return false
    }
}
//console.log(palavraChave("doing", '11987876567'))


export {
    dadosGeral,
    dadosUsuario,
    dadosContatos,
    dadosMensagens,
    dadosconversa,
    palavraChave
}