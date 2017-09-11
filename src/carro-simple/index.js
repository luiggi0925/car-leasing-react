import PropTypes from 'prop-types'
import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import noImage from '../images/no-image-icon.png'

const Carro = ({
    carro
}) => {
    //console.log()
    return (
    <div className="col-xs-3">
        <span>{carro.marca.nombre} {carro.modelo.nombre} {carro.anio}</span>
        <img alt="Imagen Carro" className="img-responsive"
            src={
            (carro.rutasImagenes && carro.rutasImagenes.length > 0) 
                ? `${carro.rutasImagenes[0]}` : noImage} />
        <a href={`/vehiculos/${carro.id}`}>Detalles</a>
    </div>
    )
}

Carro.propTypes = {
    carro : PropTypes.shape({
        marca : PropTypes.shape({
            nombre: PropTypes.string.isRequired
        }),
        modelo : PropTypes.shape({
            nombre: PropTypes.string.isRequired
        }),
        anio: PropTypes.number.isRequired,
        rutasImagenes: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}

export default Carro