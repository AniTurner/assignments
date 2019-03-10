import React, {Component} from 'react'
import Restaurant from './Restaurant.js'
import { withCity } from '../context/CityProvider.js'

import axios from 'axios'

class  RestaurantList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allRestaurants: []
        }
    }
    
    getRestaurantList = async cuisine => {
        // console.log(this.props.match.params.cuisine)
        const res = await axios.get(`https://developers.zomato.com/api/v2.1/search?lat=${this.props.lat}&lon=${this.props.lon}&cuisines=${cuisine}`, { headers:{"user-key":"***REMOVED***" }})
        console.log(res)
        const allRestaurants = res.data.restaurants
        this.setState({
            allRestaurants
        })
    }
    componentDidMount() {
        this.getRestaurantList(this.props.match.params.cuisine);
    }


    render() {    
        const mappedRestaurants = this.state.allRestaurants.map(restaurant => 
                                                    <Restaurant 
                                                        {...restaurant}
                                                    />)
console.log(this.state.allRestaurants)
        return (
        <div className='restaurant-display'>
            <div>Restaurant List</div>
            <div className='cards-container'>
                <div className='card'>
                    {mappedRestaurants}
                </div>
            </div>
            
        </div>
    ) 
    }
   
}

export default withCity(RestaurantList)