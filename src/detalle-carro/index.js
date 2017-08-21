import axios from 'axios'
import React from 'react'

import noImage from '../images/no-image-icon.png'

export default class DetalleCarro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            idCarro: props.match.params.id,
            carro: {
                id: 0,
                marca: {
                    id: 0,
                    nombre: ''
                },
                modelo: {
                    id: 0,
                    nombre: ''
                }
             }
        }
    }
    /*
    componentWillMount() {
        this.componentDidMount()
      }
      */
    componentDidMount() {
        axios.get(`/carros/${this.state.idCarro}`, {
            headers: {'content-type': 'application/json'},
            baseURL: 'http://localhost:9090/',
            timeout: 5000,
        }).then(response => {
            console.log(response.data)
            //alert('Se obtuvo carro con id: ' + response.data.id)
            this.setState({
                carro: response.data
            })
            console.log('finalizado')
        }).catch(error => {
            //alert('Error al obtener data de carro.')
            console.log(Object.assign({}, error))
        })
    }
    render() {
        const carro = this.state.carro
        const marca = carro.marca
        console.log(carro)
        console.log(marca)
        return (
            <div>
                <div>
                    <h2>{carro.marca.nombre} {carro.modelo.nombre} {carro.anio}</h2>
                </div>
                <div>
                    <img alt="Imagen Carro" className="img-responsive"
                        src={
                        (carro.rutasImagenes && carro.rutasImagenes.length > 0) 
                            ? `http://localhost:9090/${carro.rutasImagenes[0]}` : noImage} />
                </div>
                <div>
                    <h3>Descripción</h3>
                    <span>{carro.detalle}</span>
                </div>
                <div>
                    <h3>Pasajeros</h3>
                    <span>{carro.pasajeros}</span>
                </div>
                <div>
                    <h3>Precio por día de alquiler</h3>
                    <span>{carro.precioDiario}</span>
                </div>
            </div>
        )
    }
}
