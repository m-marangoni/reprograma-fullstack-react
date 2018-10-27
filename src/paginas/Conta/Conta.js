import React from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Conta.css'

function Conta() {
return (
(<main className="conta">
  <h1>Conta</h1>
  <p>Envie o formulário para criar uma conta!</p>
  <Legenda htmlFor="nome">Nome Completo:</Legenda>
  <Campo id="nome" type="text" name="nome" placeholder="Nome Completo" value="Nome" obrigatorio minLength={10}> </Campo>
  <Legenda htmlFor="telefone">Telefone:</Legenda>
  <Campo id="telefone" type="tel" name="telefone" placeholder="Telefone" value="Telefone" obrigatorio> </Campo>
  <Legenda htmlFor="email">Email:</Legenda>
  <Campo id="email" type="email" name="email" placeholder="Email" value="Email" obrigatorio minLength={10}> </Campo>
  <Legenda htmlFor="senha">Senha:</Legenda>
  <Campo id="senha" type="password" name="senha" placeholder="Senha" value="Senha" obrigatorio minLength={6}> </Campo>
  <Link url="/login">Fazer login</Link>
  <Botao desabilitado>Enviar</Botao>
</main>)
)
}

export default Conta