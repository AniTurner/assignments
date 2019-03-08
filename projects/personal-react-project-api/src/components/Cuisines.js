import React from 'react'
import { withCity } from '../context/CityProvider.js'
import { Link } from 'react-router-dom'



const Cuisines = props => {
    // console.log(props)
    const mappedCuisines =  props.cuisineData.map((cuisine,i) => 
            <div key={i}>
                <Link to={`/restaurant/${cuisine.cuisine.cuisine_name}`}>{cuisine.cuisine.cuisine_name}</Link> {/*<Link/> instead*/} 
            </div>)
    return (
        <div>
            <div>Cuisines</div>
            <div>{mappedCuisines}</div>
        </div>
    )
}

export default withCity(Cuisines)