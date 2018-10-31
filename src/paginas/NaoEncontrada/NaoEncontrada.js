import React, {Component} from 'react'
import imagemErro from "./robot-error.jpg"
import './NaoEncontrada.css'


function NaoEncontrada(){
    return(
        <main className="nao-encontrada">
        <h1>Página não encontrada</h1>
        <p className="nao-encontrada__simbolo">
        (ಥ﹏ಥ)
        </p>
        <img src={imagemErro} alt="404-not found"/>
        </main>
    )
}

export default NaoEncontrada