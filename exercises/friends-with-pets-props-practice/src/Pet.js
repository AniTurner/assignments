import React from 'react'


const Pet = (props) => {
    return (
            <ul style= {{border: '1px solid white'}}> Name: {props.name}  
                <li>Breed: {props.breed}</li>
            </ul>
    )
}






export default Pet;