import axios from 'axios'
import moment from 'moment'
import React from 'react'
import DatePicker from 'react-datepicker'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'

import './nuevo_usuario.css'

class NuevoUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            contrasena: '',
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
            contrasena: this.state.contrasena,
            nombre: this.state.nombre,
            apellido: this.state.apellido,
            email: this.state.email,
            fechaNacimiento: moment(this.state.fechaNacimiento).format('YYYY-MM-DD'),
            dni: this.state.dni
        }
        //console.log(this.state)
        //console.log(this.data)
        axios.post('/usuarios', data, {
            baseURL: 'http://localhost:9090/',
            timeout: 5000,
            headers: {'Content-Type': 'application/json'}
        }).then(response => {
            console.log(response)
            alert('Se agregó el usuario. Id: ' + response.data.id)
        }).catch(error => {
            alert('No se agregó el usuario. Revisar.')
            console.log(error)
        })
    }
    render() {
        return (
            <div className='container formulario'>
                <form onSubmit={ this.handleSubmit }>
                    <div className='form-group'>
                        <label htmlFor='email' className='form-control-label'>Correo:</label>
                        <input type='email' id='email' name='email'
                            placeholder='Correo' required className='form-control'
                            value={ this.state.email } onChange={ this.handleInputChange } />
                        <small id="ayudaEmail" className="form-text text-muted">
                            No compartiremos tu correo con otros usuarios o empresas.
                        </small>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='contrasena' className='form-control-label'>Contraseña:</label>
                        <input type='password' id='contrasena' name='contrasena'
                            placeholder='Contraseña' required className='form-control'
                            value={ this.state.contrasena } onChange={ this.handleInputChange } />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='nombre' className='form-control-label'>Nombre:</label>
                        <input type='text' id='nombre' name='nombre'
                            placeholder='Nombre' required className='form-control'
                            value={ this.state.nombre } onChange={ this.handleInputChange } />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='apellido' className='form-control-label'>Apellido:</label>
                        <input type='text' id='apellido' name='apellido'
                            placeholder='Apellido' required className='form-control'
                            value={ this.state.apellido } onChange={ this.handleInputChange } />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='dni' className='form-control-label'>DNI:</label>
                        <input type='text' id='dni' name='dni'
                            placeholder='Número de DNI' required className='form-control'
                            value={ this.state.dni } onChange={ this.handleInputChange } />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='fechaNacimiento' className='form-control-label'>Fecha de Nacimiento:</label>
                        <DatePicker id='fechaNacimiento' name='fechaNacimiento'
                            dateFormat='DD/MM/YYYY' maxDate={ moment() } 
                            fixedHeight peekNextMonth showMonthDropdown showYearDropdown dropdownMode='select'
                            selected={ this.state.fechaNacimiento } onChange={ this.handleDateChange } />
                    </div>
                    <div className='form-group'>
                        <input type="submit" value="Registrar Usuario" className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    }
}

export default NuevoUsuario