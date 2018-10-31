import React, {Component} from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Conta.css'


class Conta extends Component {

  constructor(props) {
    super(props)
    this.nomeRef = React.createRef()
    this.telefoneRef = React.createRef()
    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()
    this.state = {desabilitado: true}  
  }
  handleChange = (evento) => {
    const campoNome = this.nomeRef.current
    const campoTelefone = this.telefoneRef.current
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current

    if (campoEmail.temErro() || campoSenha.temErro() || campoNome.temErro() || campoTelefone.temErro()){
      this.setState({ desabilitado: true})
    }
    else {
      this.setState({ desabilitado: false})
    }
  }

  render(){
    return (
      <main className="conta">
  <h1>Conta</h1>
  <p>Envie o formulário para criar uma conta!</p>
  <Legenda htmlFor="nome">Nome Completo:</Legenda>
  <Campo ref={this.nomeRef} id="nome" type="text" name="nome" placeholder="Nome Completo" value="Nome" required minLength={10} onChange={this.handleChange}/> 
  <Legenda htmlFor="telefone">Telefone:</Legenda>
  <Campo ref={this.telefoneRef} id="telefone" type="tel" name="telefone" placeholder="Telefone" value="Telefone" required onChange={this.handleChange}/>
  <Legenda htmlFor="email">Email:</Legenda>
  <Campo ref={this.emailRef} id="email" type="email" name="email" placeholder="Email" value="Email" required onChange={this.handleChange} />
  <Legenda htmlFor="senha">Senha:</Legenda>
  <Campo ref={this.senhaRef} id="senha" type="password" name="senha" placeholder="Senha" value="Senha" required minLength={6} onChange={this.handleChange} />
  <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
  <Link url="/login">Fazer login</Link>
</main>
    )
  }
}

export default Conta