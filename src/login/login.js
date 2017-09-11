import PropTypes from 'prop-types'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import './login.css'

const LoginComponent = ({
    email,
    contrasena,
    handleChange,
    handleLogin
}) => (
    <div className='formulario '>
        <div className='form-group'>
            <label htmlFor='email' className='form-control-label'>Correo:</label>
            <input type='email' id='email' name='email'
                placeholder='Correo' required className='form-control'
                value={ email } onChange={ e => handleChange(e.target.name, e.target.value) } />
        </div>
        <div className='form-group'>
            <label htmlFor='contrasena' className='form-control-label'>Contraseña:</label>
            <input type='password' id='contrasena' name='contrasena'
                placeholder='Contraseña' required className='form-control'
                value={ contrasena } onChange={ e => handleChange(e.target.name, e.target.value) } />
        </div>
        <div className='form-group'>
            <input type='submit' value='Login' className='btn btn-primary'
                onClick={ handleLogin } />
        </div>
    </div>
)

LoginComponent.propTypes = {
  email: PropTypes.string.isRequired,
  contrasena: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default LoginComponent