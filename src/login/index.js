import axios from 'axios'
import Lockr from 'lockr'
import React from 'react'

import LoginComponent from './login.js'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            contrasena: ''
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
            this.props.history.push('/usuarios/nuevo')
        }).catch(error => {
            if (error.response && error.response.status === 401) {
                alert('Credenciales incorrectas')
            } else {
                alert('No se logueó el usuario. Revisar.')
                console.log(Object.assign({}, error))
            }
            console.log(error)
        })
    }
    render() {
        return (
            <LoginComponent email={ this.state.email }
                contrasena={ this.state.contrasena }
                handleLogin={ this.login.bind(this) }
                handleChange={ this.handleInputChange.bind(this) } />
        )
    }
}