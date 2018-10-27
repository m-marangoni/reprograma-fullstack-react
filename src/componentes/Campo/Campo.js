import React from 'react'
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


class Campo extends React.Component {
  constructor(props){
    super(props)
    this.state = {erro: ''}
    }
  
    valida = (evento) => {
      const input = evento.target
      if (this.props.obrigatorio && input.value.trim() === '' ) {
        this.setState({erro: 'Campo obrigatório'})
      } else if (this.props.minLength && input.value.length < this.props.minLength){
        this.setState({ erro: `Digite pelo menos ${this.props.minLength} caracteres`})
      } else {
        this.setState({ erro: ''})
      }
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
            />
            <p className="grupo__erro">{this.state.erro}</p>
          </div>
        )
    }
    
  }


export default Campo