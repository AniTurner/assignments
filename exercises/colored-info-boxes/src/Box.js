import React from 'react'

function Box(props) {
    return (
        <div style={{backgroundColor: props.style}}>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
            <h3>{props.information}</h3>
    
        </div>
    )
}





export default Box;