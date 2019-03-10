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
        <div>
            <div>Cuisines</div>
            <div>{mappedCuisines}</div>
            {/* {this.props.getRestaurantList} */}
        </div>
    )
}

export default withCity(Cuisines)