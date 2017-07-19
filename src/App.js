import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from './utilitarios/menu.js'
import FormNuevoUsuario from './components/usuario/nuevo.js'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (

      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          { <Menu />}
          <div>
            LOL
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          { /* <Mensaje messages={['hola', 'mundo']} /> */}
          { /*<FormNuevoUsuario /> */}
          <Link to="/nuevousuario">Usuario</Link>
          <Route path="/nuevousuario" component={FormNuevoUsuario} />
        </div>
      </Router>
    );
  }
}

export default App;
