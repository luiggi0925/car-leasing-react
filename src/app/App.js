import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Menu from '../menu'
import NuevoUsuario from '../nuevo-usuario'
import PerfilUsuario from '../perfil-usuario'
import AccesoUsuario from '../acceso-usuario'

import ListaCarro from '../lista-carros'
import ListaUsuario from '../lista-usuarios'
import DetalleCarro from '../detalle-carro'

import logo from './logo.svg'
import './App.css'

import Footer from '../components/footer.js'
import AddTodo from '../containers/AddTodo.js'
import VisibleTodoList from '../containers/VisibleTodoList.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="boxedtheme">
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <div>
              <div>
                <Menu />
              </div>
              <div>
                <AccesoUsuario />
              </div>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/app/App.js</code> and save to reload.
            </p>
            <Switch>
              <Route path="/usuarios/nuevo" component={NuevoUsuario} />
              <Route path="/usuarios/:id" component={PerfilUsuario} />
              <Route path="/usuarios" component={ListaUsuario} />
              <Route path="/vehiculos/:id" component={DetalleCarro} />
              <Route path="/vehiculos" component={ListaCarro} />
            </Switch>

            <div>
              <AddTodo />
              <VisibleTodoList />
              <Footer />
            </div>

          </div>
        </div>
      </Router>
    )
  }
}

export default App;
