import React from 'react'

const  Restaurant = (props) => {
  
        const {name, location:{address, city, zipcode}, price_range,average_cost_for_two, user_rating:{votes}, thumb  } = props.restaurant
        return (
            <div style={{backgroundColor: 'white'}}>
                <img src={thumb}></img>
                <h1>{name}</h1>
                <h3>{address}</h3>
                <h3>{city}</h3>
                <h3>{zipcode}</h3>
                <h3>{price_range}</h3>
                <h3>{average_cost_for_two}</h3>
                <h4>{votes}</h4>
            </div>
        )
    }

  


export default Restaurant