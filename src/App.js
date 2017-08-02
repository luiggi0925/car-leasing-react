import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from './components/menu/menu.js'
import FormNuevoUsuario from './containers/usuario/nuevo.js'
import PerfilUsuario from './containers/usuario/perfil.js'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    window.sessionStorage.setItem('idUsuario', '1')
    /*
    const usuario = {
      id: 1,
      nombre: 'Luiggi',
      apellido: 'Mendoza',
      correo: 'lol@lol.com',
      dni: '11223344',
      fechaNacimiento: '10/11/1989'
    }
    */
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          { <Menu /> }
          <div>
            LOL
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Route path="/usuarios/registro" component={FormNuevoUsuario} />
          <Route path="/usuarios/:id" component={PerfilUsuario} />
          <br />
        </div>
      </Router>
    )
  }
}

export default App;
