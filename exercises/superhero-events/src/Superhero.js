import React from 'react'

import PropTypes from 'prop-types'

const Superhero = (props) => {

    return (
        <div onClick={props.onClick}>  
            <div>{props.imgUrl}</div>          
            <h2>{props.name}</h2>
        
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