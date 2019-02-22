import React from 'react'
import PropTypes from 'prop-types'

const CounterControls = props => {
    return (
        <div>
            <button onClick={props.handleClick}>+</button>
            <button onClick={props.handleIncrement}>-</button>
            <button onClick={props.handleMultiply}>*2</button>
            <button onClick={props.handleZero}>AC</button>

        </div>

    )
}

CounterControls.propTypes = {
    handleIncrement: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleMultiply: PropsTypes.func.isRequired,
    handleZero: PropsTypes.func.isRequired
}


export default CounterControls