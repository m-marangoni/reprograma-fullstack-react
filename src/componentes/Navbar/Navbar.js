import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../Menu/Menu'
import logo from './logo.png'
import './Navbar.css'

// <Navbar usuario={usuario} deslogaUsuario={desloga/>
//const props= {usuario: usuario, deslogaUsuario: desloga}

function Navbar(props) {
    return(
        <header className="navbar">
        <Link to="/">
        <img clLinkssName="navbar__logo" src={logo} alt="Logo"/>
        </Link>
        <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
        </header>
    )
}

export default Navbar