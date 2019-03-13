import React from 'react'
import { withCity } from '../context/CityProvider.js'
import { Link, Redirect } from 'react-router-dom'




const Cuisines = props => {
    // console.log(props)
    if (!props.cuisineData.length) {
       return  <Redirect to='/'/>
    }
    const mappedCuisines =  props.cuisineData.map((cuisine,i) => 
            <div key={i}>
                <Link to={`/restaurant/${cuisine.cuisine.cuisine_name}`}>{cuisine.cuisine.cuisine_name}</Link> 
            </div>)
    return (
        <div className='cuisines-container'>
            <h1>Cuisines</h1>
            <div className='cuisine-items'>
                <div>{mappedCuisines}</div>
            </div>
        </div>
    )
}

export default withCity(Cuisines)