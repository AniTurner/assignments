import React, {Component} from 'react'
import Restaurant from './Restaurant.js'
import { withCity } from '../context/CityProvider.js'

import axios from 'axios'

class  RestaurantList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allRestaurants: [],
            isLoading: true
        }
    }
    
    getRestaurantList = async cuisine => {
        // console.log(this.props.match.params.cuisine)
        const res = await axios.get(`https://developers.zomato.com/api/v2.1/search?lat=${this.props.lat}&lon=${this.props.lon}&cuisines=${cuisine}`, { headers:{"user-key":`${process.env.REACT_APP_APIKEY}` }})
        console.log(res)
        const allRestaurants = res.data.restaurants
        this.setState({
            allRestaurants,
            isLoading: false
        })
    }
    componentDidMount() {
        this.getRestaurantList(this.props.match.params.cuisine);
    }

    // generateCost = (icon, cost) => {
    //     console.log(icon, cost)
    //     return icon.repeat(Number(cost))
    // }

    render() {    
        const mappedRestaurants = this.state.allRestaurants.map((restaurant) => 
                                                    <Restaurant 
                                                    // costIcon={this.generateCost('$', restaurant.price_range)}
                                                    {...restaurant}
                                                    />)
console.log(this.state.allRestaurants)
        return (
        <div className='restaurant-display' style={{height: 700, overflowY: 'scroll'}}>
            <h1>Restaurant List</h1>
            <div className='cards-container'>
                <div className='card'>
                    {this.state.isLoading ?
                        <div style={{display: 'grid', gridColumnStart: 2,textAlign: 'center'}}>Loading...</div>
                    : mappedRestaurants
                    }
                </div>
            </div>
            
        </div>
    ) 
    }
   
}

export default withCity(RestaurantList)