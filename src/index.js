import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './componentes/Navbar/Navbar'
import Home from './paginas/Home/Home'
import Login  from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import Contato from './paginas/Contato/Contato'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada';
import './index.css'

let usuario = JSON.parse(localStorage.getItem('usuario'))

function logaUsuario(dados){
    const json = JSON.stringify(dados)
    localStorage.setItem('usuario', json)
    usuario = dados
}
function deslogaUsuario(){
    localStorage.removeItem(usuario)
    usuario = null
}

function App(){

    return(
        <div className="app">
        <Navbar usuario={usuario} deslogaUsuario={deslogaUsuario}/>
        <Switch>
            <Route path="/"  exact render={() => {
                return usuario ? <Home /> : <Redirect to="/login"/>
            }} />
            <Route path="/login" render={(props) => {
                return <Login historico={props.history} onEnviar={logaUsuario} />
            }} />
            <Route path="/conta" component={Conta}/>
            <Route path="/login" component={Login}/>
            <Route path="/contato" component={Contato}/>
            <Route path="/quem-somos" component={QuemSomos}/>
            <Route component={NaoEncontrada}/>
        </Switch>
        </div>
    )
}

function passaDadosDoEstadoParaMeuComponente(state){
    const props = {

    }
    return props
}

const conectaNaStore = connect(
    passaDadosDoEstadoParaMeuComponente, 
    passaFuncoesQueDisparamAcoesViaProps
    )

conectaNaStore(App)

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('projeto')
)
 