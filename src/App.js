import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from './components/menu/menu.js'
import FormNuevoUsuario from './containers/usuario/nuevo.js'
import PerfilUsuario from './containers/usuario/perfil.js'
import AccesoUsuario from './containers/usuario/acceso_usuario.js'

import logo from './logo.svg'
import './App.css'

import { createStore } from 'redux'


import Footer from './components/footer.js'
import AddTodo from './containers/AddTodo.js'
import VisibleTodoList from './containers/VisibleTodoList.js'


class App extends Component {
  render() {
    /*
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          { <Menu /> }
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <Route path="/usuarios/registro" component={FormNuevoUsuario} />
          <Route path="/usuarios/:id" component={PerfilUsuario} />
          <br />
          <AccesoUsuario />
        </div>
      </Router>
    )
    */
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default App;
