import React from 'react'

import Mensaje from '../utilitarios/mensaje.js'

class FormNuevoUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            correo: '',
            contrasena: '',
            verificaContrasena: '',
            nombre: '',
            apellido: '',
            dni: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        console.log(this.state)
        event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <table>
                    <tbody>
                        <tr>
                            <td>Correo:</td>
                            <td><input type='email' placeholder='Email' required name='correo' value={ this.state.correo } onChange={ this.handleInputChange } /></td>
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
                    </tbody>
                </table>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default FormNuevoUsuario