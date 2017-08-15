import axios from 'axios'
import Lockr from 'lockr'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Login from '../../components/login/login.js'
import Logueado from '../../components/login/logueado.js'

export default class AccesoUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            contrasena: '',
            flagLogueado: Lockr.get('usuario')
        }
    }
    handleInputChange(nombre, valor) {
        this.setState({
            [nombre]: valor
        })
    }
    login(e) {
        const data = {
            email: this.state.email,
            contrasena: this.state.contrasena
        }
        axios.post('/login', data, {
            baseURL: 'http://localhost:9090/',
            timeout: 5000,
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            const usuario = {
                id: response.data.id,
                nombre: response.data.nombre,
            }
            console.log('Usuario logueado: ')
            console.log(usuario)
            Lockr.set('usuario', usuario)
            this.setState({
                flagLogueado: true
            })
        }).catch(error => {
            //const realError = Object.assign({}, error)
            if (error.response.status === 401) {
                alert('Credenciales incorrectas')
            } else {
                alert('No se logueó el usuario. Revisar.')
                console.log(Object.assign({}, error))
            }
        })
    }
    logout(e) {
        Lockr.rm('usuario')
        this.setState({
            flagLogueado: false
        })
    }
    renderSinAutorizar() {
        return (
            <Login email={ this.state.email }
                contrasena={ this.state.contrasena }
                handleLogin={ this.login.bind(this) }
                handleChange={ this.handleInputChange.bind(this) } />
        )
    }
    renderAutorizado() {
        let usuario = Lockr.get('usuario')
        return (
            <Logueado usuario={ usuario } handleLogout={ this.logout.bind(this) } />
        )
    }
    render() {
        return (
            <section id='user-login'>
                { this.state.flagLogueado ? this.renderAutorizado() : this.renderSinAutorizar() }
            </section>
        )
    }
}