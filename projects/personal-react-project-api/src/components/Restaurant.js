import React from 'react'

const Restaurant = (props) => {
    return (
        <div>

            <h1>{this.props.name}</h1>
            <h3>{this.props.address}</h3>
            <h3>{this.props.city}</h3>
            <h3>{this.props.zipcode}</h3>
            <h3>{this.props.price_range}</h3>
            <h3>{this.props.average_cost_for_two}</h3>
            <h4>{this.props.user_rating}</h4>



        </div>
    )
}


export default Restaurant