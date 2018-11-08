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
       titulo: form.titulo.value,
       texto: form.texto.value
   }
   this.props.cadastraPostit(dados)
    
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
                />
                <textarea 
                    className="postit__texto"
                    name="texto"
                    placeholder="Digite um texto..."
                    rows={5}
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