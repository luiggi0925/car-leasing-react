import React from 'react'

//import AccesoUsuario from '../acceso-usuario'
import Logo from '../logo'

import 'bootstrap/dist/css/bootstrap.min.css'

//import './index.css'

const Cabecera = (

) => {
    return (
        <section id="header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3">
                        <Logo />
                    </div>
                    <div className="col-sm-9 col-push-right text-right">
                        Prueba
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cabecera