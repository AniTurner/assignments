import React from 'react'
import Pet from './Pet.js'



const Friend = (props) => {
    const pets = props.pets.map((pet, i) => <Pet name = {pet.name} breed = {pet.breed} key = {i}/>)
    return (
        <div>
            <h1>Hi my name is {props.name}, and I am {props.age} years old</h1>
            <h3>These are my pets and their breed: </h3>
            <ul>
                {pets}
            </ul>
        </div>
    )
}







export default Friend;