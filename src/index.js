import React from 'react'
import ReactDOM from 'react-dom'
import  Link  from './componentes/Link/Link'
import  Botao  from './componentes/Botao/Botao';
import './index.css'



const paginaLogin = (
  <main className="pagina-login">
    <h1>Login</h1>
    <p>Entre com seu email e senha.</p>
    <Link url="/conta">Criar uma conta</Link>
    <Link url="/login">Fazer login</Link>
    <Botao desabilitado>Enviar</Botao>
    <Botao>Enviar</Botao>
  </main>
)

const divisaoProjeto = document.getElementById('projeto')
ReactDOM.render(paginaLogin, divisaoProjeto)
