import React from 'react'
import { connect } from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
import {deslogaUsuario} from '../../redux/actions'
import Menu from '../Menu/Menu'
import logo from './logo.png'
import './Navbar.css'

// <Navbar usuario={usuario} deslogaUsuario={desloga/>
//const props= {usuario: usuario, deslogaUsuario: desloga}

function Navbar(props) {
    return(
        <header className="navbar">
        <Link to="/">
        <img className="navbar__logo" src={logo} alt="Logo"/>
        </Link>
        <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
        </header>
    )
}


export default withRouter(connect( 
    (state) => ({usuario: state.usuario}),
    {deslogaUsuario}
     )
     (Navbar)
    )