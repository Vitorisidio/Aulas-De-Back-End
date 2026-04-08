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
console.log(dadosUsuario('11966578996'))