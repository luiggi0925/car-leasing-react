import axios from 'axios'
import React from 'react'

//import Carro from '../carro-simple'

export default class ListaUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usuarios: [],
            paginacion: {}
        }
    }
    componentDidMount = () => {
        axios.get('/carros', {
            headers: { 'content-type': 'application/json' },
            baseURL: 'http://localhost:9090/',
            timeout: 5000,
        }).then(response => {
            console.log(response)
            this.setState({
                usuarios: response.data.elementos,
                paginacion: {
                    totalElementos: response.data.totalElementos,
                    tamanioPagina: response.data.tamanioPagina,
                    totalPaginas: response.data.totalPaginas,
                    paginaActual: response.data.paginaActual
                }
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const usuarios = this.state.usuarios.slice()
        return (
            <div>
            </div>
        )
    }
}