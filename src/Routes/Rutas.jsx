import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import Proyecto from '../Pages/Proyecto'

const Rutas = (props) => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/Inicio" component={Home} />
                <Route exact path="/Inicio/:name" component={Proyecto} />
            </Switch>
        </BrowserRouter>
    )
}

export default Rutas;