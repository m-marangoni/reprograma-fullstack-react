export function logaUsuario(dados) {
    return {
        type: 'LOGA_USUARIO',
        dados
    }
}


export function deslogaUsuario() {
    return{
        deslogaUsuario: () => {
            const acao = {
                type: 'DESLOGA_USUARIO'
            }
        }
    }
}

export function cadastraPostit(dados){
    return {
        type: 'CADASTRA_POSTIT',
        dados
    }
}