import axios from 'axios'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Utils from '../utils'

import './index.css'

export default class NuevoCarro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idMarca: 0,
            idModelo: 0,
            anio: 0,
            detalle: '',
            pasajeros: 4,
            precioDiario: 0.0,
            files: '',
            marcas: [],
            modelos: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleMarcaChange = this.handleMarcaChange.bind(this)
        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount = () => {
        axios.get('/marcas', {
            baseURL: 'http://localhost:9090/',
            timeout: 5000,
            headers: {'Content-Type': 'application/json'},
            data: {}
        }).then(response => {
            console.log(response)
            const marcas = response.data
            this.setState({
                marcas
            })
        }).catch(error => {
            alert('No se cargaron las marcas.')
            console.log(Object.assign({}, error))
            console.log(error)
        })
        
    }
    handleInputChange(event) {
        const target = event.target
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }
    handleMarcaChange(event) {
        this.handleInputChange(event)
        const target = event.target
        const idMarca = target.type === 'checkbox' ? target.checked : target.value
        axios.get(`/marcas/${idMarca}/modelos`, {
            baseURL: 'http://localhost:9090/',
            timeout: 5000,
            headers: {'Content-Type': 'application/json'},
            data: {}
        }).then(response => {
            console.log(response)
            const modelos = response.data
            this.setState({
                modelos
            })
        }).catch(error => {
            alert('No se cargaron las marcas.')
            console.log(Object.assign({}, error))
            console.log(error)
        })
    }
    handleImageChange(e) {
        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
            this.setState({
                files: file
            });
        }
    
        reader.readAsDataURL(file)
    }
    handleSubmit(event) {
        event.preventDefault()
        const data = new FormData()
        data.append('marca.id', this.state.idMarca)
        data.append('modelo.id', this.state.idModelo)
        data.append('anio', this.state.anio)
        data.append('detalle', this.state.detalle)
        data.append('pasajeros', this.state.pasajeros)
        data.append('precioDiario', this.state.precioDiario)
        data.append('files', this.state.files)
        data.append('idUsuario', 1) //hardcodeado por mientras
        console.log(data)
        axios.post('/carros', data, {
            baseURL: 'http://localhost:9090/',
            timeout: 5000,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(response => {
            console.log(response)
            alert('Se agregó el usuario. Id: ' + response.data.id)
        }).catch(error => {
            alert('No se agregó el usuario. Revisar.')
            console.log(error)
        })
    }
    render() {
        console.log('render time')
        const marcas = this.state.marcas.slice()
        const modelos = this.state.modelos.slice()
        const anios = Utils.availableYears().reverse().slice()
        return (
            <div className='container formulario'>
                <form onSubmit={ this.handleSubmit }>
                    <div className='form-group'>
                        <label htmlFor='idMarca' className='form-control-label'>Marca</label>
                        <select name='idMarca' className='form-control'
                            value={ this.state.idMarca } onChange={ this.handleMarcaChange }>
                            <option value='0'>--Seleccione--</option>
                            {
                                marcas.map(ma => <option key={ma.id} value={ma.id}>{ma.nombre}</option>)
                            }
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='idModelo' className='form-control-label'>Modelo</label>
                        <select name='idModelo' className='form-control'
                            value={ this.state.idModelo } onChange={ this.handleInputChange }>
                            <option value='0'>--Seleccione--</option>
                            {
                                modelos.map(mo => <option key={mo.id} value={mo.id}>{mo.nombre}</option>)
                            }
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='anio' className='form-control-label'>Año</label>
                        <select name='anio' className='form-control'
                                value={ this.state.anio } onChange={ this.handleInputChange }>
                            <option value='0'>--Seleccione--</option>
                            {
                                anios.map(a => <option key={a} value={a}>{a}</option>)
                            }
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='detalle' className='form-control-label'>Detalle</label>
                        <textarea id='detalle' name='detalle'
                            required className='form-control'
                            value={ this.state.detalle } onChange={ this.handleInputChange } />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='pasajeros' className='form-control-label'>Pasajeros</label>
                        <input type='number' id='pasajeros' name='pasajeros'
                            placeholder='Pasajeros' required className='form-control'
                            value={ this.state.pasajeros } onChange={ this.handleInputChange } />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='precioDiario' className='form-control-label'>Precio Diario</label>
                        <input type='text' id='precioDiario' name='precioDiario'
                            placeholder='Precio Diario' required className='form-control'
                            value={ this.state.precioDiario } onChange={ this.handleInputChange } />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='files' className='form-control-label'>Imagen del carro</label>
                        <input type='file' id='files' name='files'
                            className='form-control'
                            onChange={ this.handleImageChange } />
                    </div>
                    <div className='form-group'>
                        <input type="submit" value="Registrar Carro" className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    }
}
