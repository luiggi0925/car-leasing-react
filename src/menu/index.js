import React from 'react'
import { Link } from 'react-router-dom'

import './index.css'

export default class Menu extends React.Component {
    render() {
        return (
            <div className="menu-wrap">
                <nav className="menu">
                    <ul className="clearfix">
                        <li><a href="/">Inicio</a></li>
                        <li>
                            <a href="/vehiculos">
                                Vehículos<span className="arrow">&#9660;</span>
                            </a>
                            <ul className="sub-menu">
                                <li><a href="/vehiculos">Buscar</a></li>
                                <li><a href="/vehiculos/nuevo">Registrar</a></li>
                            </ul>
                        </li>
                        <li><a href="/usuarios">Usuarios</a></li>
                        <li><Link to="/usuarios/nuevo">Nuevo Usuario</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
