import axios from 'axios'
import React from 'react'

import PerfilUsuario from './perfil.js'

export default class MiPerfil extends React.Component {
    constructor(props) {
        super(props)
        const idUsuario = window.sessionStorage.getItem('idUsuario')
    }
}