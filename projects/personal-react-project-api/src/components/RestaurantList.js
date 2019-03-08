import React, {Component} from 'react'
import axios from 'axios'

class  RestaurantList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    // console.log(props.match.params)
    getRestaurantList = async cuisine => {
        const restaurants = await axios.get(`https://developers.zomato.com/api/v2.1/search?city_id=${this.state.lat}&lon=${this.state.lon}&cuisines=${cuisine}`, { headers:{"user-key":"***REMOVED***" }})
        console.log(restaurants)
        this.setState({
            restaurants: this.cuisine
        })
        // const restaurantData = cuisines.data.cuisines.restaurant 
    }
    componentDidMount() {
        this.props.match.params
    }


    render() {
        return (
        <div>
            <div>Restaurant List</div>
            
        </div>
    ) 
    }
   
}

export default RestaurantList