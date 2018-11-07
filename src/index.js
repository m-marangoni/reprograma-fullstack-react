import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './componentes/Navbar/Navbar'
import Home from './paginas/Home/Home'
import Login  from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import Contato from './paginas/Contato/Contato'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada';
import './index.css'


function App(){
    return(
        <div className="app">
        <Navbar />
        <Switch>
            <Route path="/"  exact component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/conta" component={Conta}/>
            <Route path="/contato" component={Contato}/>
            <Route path="/quem-somos" component={QuemSomos}/>
            <Route component={NaoEncontrada}/>
        </Switch>
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('projeto')
)
