import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Menu from '../menu'
import NuevoUsuario from '../nuevo-usuario'
import PerfilUsuario from '../perfil-usuario'
import AccesoUsuario from '../acceso-usuario'

import logo from './logo.svg'
import './App.css'

import Footer from '../components/footer.js'
import AddTodo from '../containers/AddTodo.js'
import VisibleTodoList from '../containers/VisibleTodoList.js'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <Menu />
          <p className="App-intro">
            To get started, edit <code>src/app/App.js</code> and save to reload.
          </p>
          <Route path="/usuarios/registro" component={NuevoUsuario} />
          {/*<Route path="/usuarios/:id" component={PerfilUsuario} />*/ }
          <br />
          <AccesoUsuario />

          {
            /*
          <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
          </div>
          */
          }
        </div>
      </Router>
    )
  }
}

export default App;
