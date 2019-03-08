import React, {Component} from 'react'
import Restaurant from './components/Restaurant.js'
import axios from 'axios'

class  RestaurantList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allRestaurants: []
        }
    }
    getRestaurantList = async cuisine => {
        const restaurants = await axios.get(`https://developers.zomato.com/api/v2.1/search?city_id=${this.state.lat}&lon=${this.state.lon}&cuisines=${cuisine}`, { headers:{"user-key":"***REMOVED***" }})
        console.log(restaurants)
        const allRestaurants = this.props.match.params.restaurants
        this.setState({
            allRestaurants
        })
    }
    componentDidMount() {
        this.getRestaurantList();
    }

    const mappedRestaurants = props.allRestaurants.map(restaurant => <Restaurant {...restaurant}/>)


    render() {
        return (
        <div>
            <div>Restaurant List</div>
            <div>
                {this.state.allRestaurants} 
                {mappedRestaurants}
            </div>
            
        </div>
    ) 
    }
   
}

export default RestaurantList