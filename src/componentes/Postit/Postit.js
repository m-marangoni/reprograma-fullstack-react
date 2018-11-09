import React, { Component } from 'react'
import { cadastraPostit } from '../../redux/actions'
import { connect } from 'react-redux'
import './Postit.css'

class Postit extends Component {
    constructor(props){
        super(props)

    }

cadastraOuAlteraPostit = (event) => {
   event.preventDefault()

   const form = event.target
   const dados = {
       id: `9fdcfcd1-5f8a-45d8-b392-03eaa4ce8d7${Math.random(100)}`,
       titulo: form.titulo.value,
       texto: form.texto.value
   }
   this.props.cadastraPostit(dados)

   form.reset()
}

    render(){
        return (
            <form className="postit" onSubmit={this.cadastraOuAlteraPostit}>
                <input 
                    className="postit__titulo"
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    autoComplete="off"
                    defaultValue={this.props.titulo}
                />
                <textarea 
                    className="postit__texto"
                    name="texto"
                    placeholder="Digite um texto..."
                    rows={5}
                    defaultValue={this.props.texto}
                />
                <button className="postit__botao-concluir"> 
                    Concluído
                </button>
            </form>
        )
    }
}

export default connect(
null,
{cadastraPostit}
)(Postit) 