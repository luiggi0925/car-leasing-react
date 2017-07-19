import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import FormNuevoUsuario from '../usuario/nuevo.js'

import './menu.css'

class Menu extends React.Component {
    render() {
        return (
            <Router>
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
                        <li><Link to='usuarios'>Usuarios</Link></li>
                        <li><a href="#">Mi perfil</a></li>
                    </ul>
                </nav>
                <Route path="/nuevousuario" component={FormNuevoUsuario} />
            </div>
            </Router>
        )
    }
}

export default Menu