import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import Cabecera from '../cabecera'
import DetalleCarro from '../detalle-carro'
import ListaCarro from '../lista-carros'
import ListaUsuario from '../lista-usuarios'
import Login from '../login'
import Menu from '../menu'
import NuevoCarro from '../nuevo-carro'
import NuevoUsuario from '../nuevo-usuario'
import PerfilUsuario from '../perfil-usuario'

import './App.css'

class App extends Component {
  render() {
    const history = createBrowserHistory()
    return (
      <Router history={history}>
        <div className="boxedtheme">
            <Cabecera />
            <div className="App-header">
              <h2>Welcome to React</h2>
            </div>
            <div>
              <div>
                <Menu />
              </div>
              <div>
                
              </div>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/app/App.js</code> and save to reload.
            </p>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/usuarios/nuevo" component={NuevoUsuario} />
              <Route path="/usuarios/:id" component={PerfilUsuario} />
              <Route path="/usuarios" component={ListaUsuario} />
              <Route path="/vehiculos/nuevo" component={NuevoCarro} />
              <Route path="/vehiculos/:id" component={DetalleCarro} />
              <Route path="/vehiculos" component={ListaCarro} />
            </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
