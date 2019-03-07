import React from 'react'
import { withCity } from '../context/CityProvider.js'
 


const Cuisines = props => {
    console.log(props)
    // const mappedCuisines =  props.cuisineData.map((cuisine,i) => 
    //         <div key={i}>
    //             <div>{cuisine.cuisine.cuisine_name}</div>
    //         </div>)
    return (
        <div>
            {/* {mappedCuisines} */}
        </div>
    )
}

export default withCity(Cuisines)