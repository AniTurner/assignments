import React from 'react'
import PropTypes from 'prop-types'

const Superhero = (props) => {
    console.log(props)

    return (
        <div onClick={props.onClick}>
            <div></div>
            <h2>{props.name}</h2>
            <p>{props.show}</p>
        
        </div>
    )
}


Superhero.propTypes = {
    name: PropTypes.string,
    show: PropTypes.string,
    catchPhrase: PropTypes.string,
    imageName: PropTypes.string
}

export default Superhero