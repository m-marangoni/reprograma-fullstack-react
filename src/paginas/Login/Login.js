import React, {Component} from 'react'
import { connect } from 'react-redux'
import { logaUsuario} from '../../redux/actions'
import { Redirect } from 'react-router-dom'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Login.css'
//camilaibs@gmail.com 123123
class Login extends Component {

  constructor(props) {
    super(props)
    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()
    this.state = { desabilitado: true }
  }

  handleChange = () => {
    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current
    
    if (campoEmail.temErro() || campoSenha.temErro()){
      this.setState({ desabilitado: true})
    }
    else {
      this.setState({ desabilitado: false})
    }
  }

  enviaDados = (event) => {
    event.preventDefault()

    const dados = {
      email: this.emailRef.current.getValor(),
      senha: this.senhaRef.current.getValor()
    }
    this.props.logaUsuario(dados)
    this.props.history.push('/')
    
  }
    
    render(){
      if (this.props.usuario) {
        return <Redirect to="/" />
      }
      return (
        <main className="login">
      <h1>Login</h1>
      <p>Entre com seu email e senha.</p>
      <form onSubmit={this.enviaDados}>
        <Legenda htmlFor="email">Email:</Legenda>
        <Campo 
          ref={this.emailRef} 
          id="email" 
          type="email" 
          name="email" 
          placeholder="Email" 
          value="Email" 
          required 
          onChange={this.handleChange}
        /> 
        <Legenda htmlFor="senha">Senha:</Legenda>
        <Campo ref={this.senhaRef}  id="senha"  type="password"  name="senha"  placeholder="Senha"  value="Senha" required  minLength={6}  onChange={this.handleChange}
          />
        <Botao desabilitado={this.state.desabilitado}>
          Enviar
        </Botao>
      </form>
      <Link url="/conta">Criar uma conta</Link>
    </main>
   )
  }
}




export default connect((state) => ({ usuario: state.usuario}), 
  { logaUsuario }
  )(Login)