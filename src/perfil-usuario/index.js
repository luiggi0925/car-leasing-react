import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import React from 'react'

const PerfilUsuario = ({
    usuario,
    handleLogout
}) => {
    const link = `/usuarios/${usuario.id}`
    return (
        <div>
            <span>
                <Link to={link}>{ usuario.nombre }</Link>
            </span>
            <button className='btn btn-primary'
                onClick={ handleLogout }>Cerrar Sesión</button>
        </div>
    )
}

PerfilUsuario.propTypes = {
  usuario: PropTypes.object.isRequired,
  handleLogout: PropTypes.func.isRequired
}

export default PerfilUsuario