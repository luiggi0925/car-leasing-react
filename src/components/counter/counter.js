import PropTypes from 'prop-types'
import React from 'react'

const Counter = ({
    value,
    onIncrement,
    onDecrement
  }) => {
    <div>
        <h1>value</h1>
        <button onClick={ onIncrement }>+</button>
        <button onClick={ onDecrement }>-</button>
    </div>
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
}

export default Counter