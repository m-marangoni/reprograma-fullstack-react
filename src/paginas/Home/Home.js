import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import background from "./alunas.png"
import './Home.css'


function Home(props){
    if (!props.usuario){
        return <Redirect to="/login"/>
    }

    return ( <main className="home">
       
        </main>
    )
}

export default connect(
    (state) =>  ({usuario: state.usuario})
)(Home)
