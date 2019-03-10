import React from 'react'

const  Restaurant = (props) => {
  
        const {name, location:{address, city, zipcode}, price_range,average_cost_for_two, user_rating:{votes}, thumb  } = props.restaurant
        return (
            <div className='restaurant-display'>
                <div className='cards-container'>
                    <div className='card'>
                        {/* <img src={thumb}></img> */}
                        <h1>{name}</h1>
                        <h3>Address: {address}</h3>
                        <h3>City: {city}</h3>
                        <h3>Zip: {zipcode}</h3>
                        <h3>What is the price range? {price_range}</h3>
                        <h3>Average cost for 2: {average_cost_for_two}</h3>
                        <h4>Thumbs Up: {votes}</h4>
                    </div>
                </div>
            </div>
        )
    }

  


export default Restaurant