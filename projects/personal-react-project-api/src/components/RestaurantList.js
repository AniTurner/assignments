import React, {Component} from 'react'
import Restaurant from './Restaurant.js'
import axios from 'axios'

class  RestaurantList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allRestaurants: []
        }
    }
    getRestaurantList = async cuisine => {
        const res = await axios.get(`https://developers.zomato.com/api/v2.1/search?city_id=${this.state.lat}&lon=${this.state.lon}&cuisines=${this.props.match.params.cuisine}`, { headers:{"user-key":"***REMOVED***" }})
        console.log(res)
        const allRestaurants = res.data.restaurants
        this.setState({
            allRestaurants
        })
    }
    componentDidMount() {
        this.getRestaurantList();
    }


    render() {    
        const mappedRestaurants = this.state.allRestaurants.map(restaurant =>                                                                         <Restaurant 
                                                        {...restaurant}
                                                    />)

        return (
        <div>
            <div>Restaurant List</div>
            <div>
                {mappedRestaurants}
            </div>
            
        </div>
    ) 
    }
   
}

export default RestaurantList