import axios from 'axios'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

class PerfilUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idUsuario: props.match.params.id,
            usuario: {
                id: 1,
                nombre: 'Luiggi',
                apellido: 'Mendoza',
                email: 'a@b.com',
                dni: '11223344',
                fechaNacimiento: '11/12/1987'
            }
        }
    }
    componentDidMount() {
        axios.get(`/usuarios/${this.state.idUsuario}`, {
            headers: {'content-type': 'application/json'},
            baseURL: 'http://localhost:9090/',
            timeout: 5000,
        }).then(response => {
            console.log(response)
            //alert('Se agregó el usuario. Id: ' + response.data.id)
            this.setState({
                usuario: response.data
            })
        }).catch(error => {
            //alert('No se agregó el usuario. Revisar.')
            console.log(error)
        })
    }
    currentUser(usuario) {
        if (usuario.id.toString() === window.sessionStorage.getItem('idUsuario')) {
            return (
                <dl className='dl-horizontal'>
                    <dt>Nombre</dt>
                    <dd>{ usuario.nombre }</dd>

                    <dt>Apellido</dt>
                    <dd>{ usuario.apellido }</dd>

                    <dt>Correo</dt>
                    <dd>{ usuario.email }</dd>

                    <dt>DNI</dt>
                    <dd>{ usuario.dni }</dd>

                    <dt>Fecha de Nacimiento</dt>
                    <dd>{ usuario.fechaNacimiento }</dd>
                </dl>
            )
        }
        return (
            <dl className='dl-horizontal'>
                <dt>Nombre</dt>
                <dd>{ usuario.nombre }</dd>

                <dt>Apellido</dt>
                <dd>{ usuario.apellido }</dd>
            </dl>
        )
    }
    render() {
        return(
            <div className='container'>
                { this.currentUser(this.state.usuario ) }
            </div>
        )
    }
}

export default PerfilUsuario