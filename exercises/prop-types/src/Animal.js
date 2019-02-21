import React from 'react'
import PropTypes from 'prop-types'


const Animal = props => {
    return (
        <div>
            <h1>Type: {props.type}</h1>
            <h3>Sound it Makes: {props.sound}</h3>
            <p>Coat: {props.coat}</p>
            <p>Legs: {props.legs}</p>

        </div>
    )
}



Animal.propTypes = {
    type: PropTypes.string.isRequired,
    legs: PropTypes.number,
    coat: PropTypes.string
}



export default Animal