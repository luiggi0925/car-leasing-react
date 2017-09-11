import axios from 'axios'
import React from 'react'

//import Carro from '../carro-simple'
import PerfilUsuarioSimple from '../perfil-usuario-simple'

export default class ListaUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            usuarios: [],
            paginacion: {}
        }
    }
    componentDidMount = () => {
        axios.get('/usuarios', {
            headers: { 'content-type': 'application/json' },
            baseURL: 'http://localhost:9090/',
            timeout: 5000,
            data: {}
        }).then(response => {
            console.log(response)
            this.setState({
                usuarios: response.data
            })
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        const usuarios = this.state.usuarios.slice()
        return (
            <div>
                {
                    usuarios.map(u => (<PerfilUsuarioSimple key={u.id} usuario={u} />))
                }
            </div>
        )
    }
}