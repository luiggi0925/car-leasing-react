import React from 'react'
import axios from 'axios'

import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

//import Mensaje from '../../components/mensaje/mensaje.js'

import Test from './test.js'

class FormNuevoUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            contrasena: '',
            verificaContrasena: '',
            nombre: '',
            apellido: '',
            dni: '',
            fechaNacimiento: moment()
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleDateChange = this.handleDateChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(event) {
        const target = event.target
        const name = target.name
        if (name === 'fechaNacimiento') {
            return
        }
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }
    handleDateChange(date) {
        this.setState({
            fechaNacimiento: date
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        let data = {
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            email: this.state.email,
            fechaNacimiento: moment(this.state.fechaNacimiento).format('YYYY-MM-DD'),
            dni: this.state.dni
        }
        console.log(this.state)
        console.log(this.data)
        axios.post('/usuarios', data, {
            baseURL: 'http://localhost:9090/',
            timeout: 5000,
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            alert('Se agregó el usuario. Id: ' + response.id)
        }).catch(error => {
            alert('No se agregó el usuario. Revisar.')
            console.log(error)
        })
    }
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <table>
                    <tbody>
                        <tr>
                            <td>Correo:</td>
                            <td><input type='email' placeholder='Email' required name='email' value={ this.state.email } onChange={ this.handleInputChange } /></td>
                        </tr>
                        <tr>
                            <td>Contraseña:</td>
                            <td><input type='text' name='contrasena' required value={ this.state.contrasena } onChange={ this.handleInputChange } /></td>
                        </tr>
                        <tr>
                            <td>Verificar contraseña:</td>
                            <td><input type='text' name='verificaContrasena' required value={ this.state.verificaContrasena } onChange={ this.handleInputChange } /></td>
                        </tr>
                        <tr>
                            <td>Nombre:</td>
                            <td><input type='text' name='nombre' required value={ this.state.nombre } onChange={ this.handleInputChange } /></td>
                        </tr>
                        <tr>
                            <td>Apellido:</td>
                            <td><input type='text' name='apellido' required value={ this.state.apellido } onChange={ this.handleInputChange } /></td>
                        </tr>
                        <tr>
                            <td>Dni:</td>
                            <td><input type='text' name='dni' required value={ this.state.dni } onChange={ this.handleInputChange } /></td>
                        </tr>
                        <tr>
                            <td>Fecha de Nacimiento:</td>
                            <td>
                                {
                                /*
                                <DatePicker 
                                            dateFormat='DD/MM/YYYY' maxDate={ moment() } 
                                            fixedHeight peekNextMonth showMonthDropdown showYearDropdown dropdownMode='select'
                                            selected={ this.state.fechaNacimiento } onChange={ this.handleDateChange }
                                            />
                                */
                                }
                                <Test />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default FormNuevoUsuario