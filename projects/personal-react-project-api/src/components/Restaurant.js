import React from 'react'

const  Restaurant = (props) => {
    console.log(props.restaurant.price_range)
  console.log(props.costIcon)
        const {name, location:{address, city, zipcode}, price_range,average_cost_for_two, user_rating:{votes}, thumb  } = props.restaurant
        return (
            <div >
                <div >
                    <div >
                        {/* <img src={thumb}></img> */}
                        <h1>{name}</h1>
                        <h3><span>Address:</span> {address}</h3>
                        <h3><span>City:</span> {city}</h3>
                        <h3><span>Zip:</span> {zipcode}</h3>
                        <h3><span>What is the price range?</span> {price_range}</h3>
                        {/* <h3><span>Average cost for 2:</span> {average_cost_for_two}</h3> */}
                        <h4><span>Thumbs Up:</span> {votes}</h4>
                    </div>
                </div>
            </div>
        )
    }

  


export default Restaurant