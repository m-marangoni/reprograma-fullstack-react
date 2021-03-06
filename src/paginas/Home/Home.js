import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Postit from '../../componentes/Postit/Postit'
import loading from './loading.svg'
import './Home.css'


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {loading: false}
    }

    render(){
        if (!this.props.usuario){
            return <Redirect to="/login"/>
        }
    
        return ( 
            <main className="home">
            {this.state.loading ? (
                <img className="home__loading" src={loading} alt="loading"/>
            ) :
            ( <div> 
                <Postit/>
                <div>
                    {this.props.postits.map(postit => (
                        <Postit 
                        key={postit.id}
                        id={postit.id}
                        titulo={postit.titulo}
                        texto={postit.texto}

                         />
                    ))}
                </div>

            </div>

        )}
            </main>
        )}
}

export default connect(
    (state) =>  ({
    usuario: state.usuario,
    postits: state.postits
})
)(Home)
