import React from 'react'

import './menu.css'

class Menu extends React.Component {
    render() {
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
                        <li><a href="#">Mi perfil</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Menu