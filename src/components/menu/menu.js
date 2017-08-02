import React from 'react'
import { Link } from 'react-router-dom'

import './menu.css'

export default class Menu extends React.Component {
    render() {
        const idUsuario = window.sessionStorage.getItem('idUsuario')
        return (
            <div className="menu-wrap">
                <nav className="menu">
                    <ul className="clearfix">
                        <li><a href="#">Inicio</a></li>
                        <li>
                            <a href="#">
                                Vehículos<span className="arrow">&#9660;</span>
                            </a>
                            <ul className="sub-menu">
                                <li> <a href="#">Rentar un vehículo</a></li>
                                <li> <a href="#">Mis vehículos</a></li>
                                <li> <a href="#">Registrar</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Usuarios</a></li>
                        <li><Link to="/usuarios/registro">Nuevo Usuario</Link></li>
                        <li><Link to={"/usuarios/" + idUsuario}>Mi Perfil</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
