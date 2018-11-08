import React, { Component } from 'react'
import './Postit.css'

class Postit extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return (
            <form className="postit">
                <input 
                    className="postit__titulo"
                    type="text"
                    name="titulo"
                    placeholder="Título"
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

export default Postit
