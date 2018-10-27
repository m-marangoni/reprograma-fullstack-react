import React from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Login.css'

function Login() {
return (
(<main className="login">
  <h1>Login</h1>
  <p>Entre com seu email e senha.</p>
  <Legenda htmlFor="email">Email:</Legenda>
  <Campo id="email" type="email" name="email" placeholder="Email" value="Email" obrigatorio minLength={10} pattern={/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}> </Campo>
  <Legenda htmlFor="senha">Senha:</Legenda>
  <Campo id="senha" type="password" name="senha" placeholder="Senha" value="Senha" obrigatorio minLength={6}> </Campo>
  <Link url="/conta">Criar uma conta</Link>
  <Link url="/login">Fazer login</Link>
  <Botao desabilitado>Enviar</Botao>
  <Botao>Enviar</Botao>
</main>)
)
}

export default Login