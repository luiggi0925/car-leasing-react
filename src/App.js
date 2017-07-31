import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Menu from './components/menu/menu.js'
import FormNuevoUsuario from './containers/usuario/nuevo.js'

import logo from './logo.svg'
import './App.css'


import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

import Test from './containers/usuario/test.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fechaNacimiento : moment()
    }
    this.handleDateChange = this.handleDateChange.bind(this)
  }
  handleDateChange(date) {
        this.setState({
            fechaNacimiento: date
        })
    }
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
          { /*}
          <DatePicker 
                                            dateFormat='DD/MM/YYYY' maxDate={ moment() } 
                                            fixedHeight peekNextMonth showMonthDropdown showYearDropdown dropdownMode='select'
                                            selected={ this.state.fechaNacimiento } onChange={ this.handleDateChange }
                                            />
          */ }
          <Test />
        </div>
      </Router>
    );
  }
}

export default App;
