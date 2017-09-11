import PropTypes from 'prop-types'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

//import noImage from '../images/no-image-icon.png'

const PerfilUsuarioSimple = ({
    usuario
}) => {
    //console.log()
    return (
    <div className="col-xs-3">
        <a href={`/usuarios/${usuario.id}`}>
            <span>{usuario.nombre} {usuario.apellido}</span>
        </a>
    </div>
    )
}

PerfilUsuarioSimple.propTypes = {
    usuario : PropTypes.shape({
        id: PropTypes.number.isRequired,
        nombre: PropTypes.string.isRequired,
        apellido: PropTypes.string.isRequired
    })
}

export default PerfilUsuarioSimple