import React from 'react'

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



export default CounterControls