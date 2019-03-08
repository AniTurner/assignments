import React from 'react'
import { withCity } from '../context/CityProvider.js'
 


const Cuisines = props => {
    // console.log(props)
    const mappedCuisines =  props.cuisineData.map((cuisine,i) => 
            <div key={i}>
                <div>{cuisine.cuisine.cuisine_name}</div> {/*<Link/> instead*/} 
            </div>)
    return (
        <div>
            <div>Cuisines</div>
            {/* <img src={mappedCuisines.image_Url}/> */}
            <p>{mappedCuisines}</p>
        </div>
    )
}

export default withCity(Cuisines)