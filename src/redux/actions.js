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
