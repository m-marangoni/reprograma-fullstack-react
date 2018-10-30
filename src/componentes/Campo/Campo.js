import React, { Component } from 'react'
import './Campo.css'
/*
1) O componente pode mudar de estado? Sim // Classe
2) O que muda? state = { erro: '' } ou {erro: 'Campo obrigatório'}
3) Qual o estado inicial? state = { erro: '' } //constructor
4) O que faz ele mudar?
// function onChange pra verificar se eu devo ou não mostrar uma mensagem de erro
if condicao mostra erro
- Email: obrigatorio, pelo menos 10 carateres
- Senha: obrigatorio, pelo menos 6 caracteres
*/


class Campo extends Component {
  constructor(props){
    super(props)    
    this.senhaRef = React.createRef()
    this.emailRef = React.createRef()
    this.state = {
        modificado: false, 
        erro: ''
      }
    }
    
    temErro() {
      if (!this.state.modificado || this.state.erro){
        return true
      }
      else{
        return false
      }
    }

    valida = (evento) => {
      const input = evento.target
      const {value, type } = input
      const { required, minLength} = this.props
      const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      let mensagem = ''


      if (required && value.trim() === '' ) {
        mensagem = 'Campo obrigatório'
      } else if (minLength && value.length < minLength){
        mensagem = `Digite pelo menos ${minLength} caracteres`
      } else if (type === 'email' && !regex.test(value)){
        mensagem =  'Email inválido'
      }
        this.setState({modificado: true,  erro: mensagem}, this.props.onChange)
    }
    render() {
        return (
          <div>
            <input
              id={this.props.id}
              className="campo"
              type={this.props.type}
              name={this.props.name}
              placeholder={this.props.placeholder}
              onChange={this.valida}
              onBlur={this.valida}
            />
            <p className="grupo__erro">{this.state.erro}</p>
          </div>
        )
    }
    
  }


export default Campo