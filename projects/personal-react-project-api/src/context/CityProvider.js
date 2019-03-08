import React, { Component } from 'react'
import axios from 'axios'

const CityContext = React.createContext()

class CityProvider extends Component {
    constructor() {
        super()
        this.state = {
            cityId: '',
            cuisineData : [],
            lat: '',
            lon: '',
            res_id: [],
            daily_menu: ''
        }
    }

    getCityId = async city => {
        try {
            const res = await axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${ city }` , { headers:{"user-key":"***REMOVED***" }})
            const lat = res.data.location_suggestions[0].latitude
            const lon = res.data.location_suggestions[0].longitude
            const cityId = res.data.location_suggestions[0].city_id
            // console.log(lat, lon, cityId)
            const cuisines = await axios.get(`https://developers.zomato.com/api/v2.1/cuisines?city_id=${ cityId }`, { headers:{"user-key":"***REMOVED***" }})
            const cuisineData = cuisines.data.cuisines
            // console.log(cuisineData)
            this.setState({
                lat, lon, cityId, cuisineData
            })
        } catch(err) {
            console.log(err)
        }
    }

    getRestaurantList = async restaurant => {
        const restaurants = await axios.get(`https://developers.zomato.com/api/v2.1/restaurants?city_id=${this.state.lat}&lon=${this.state.lon}&cuisines=${this.state.cuisines}`, { headers:{"user-key":"***REMOVED***" }})
        console.log(restaurants)
        // const restaurantData = 
    }

    updateDailyMenu = async () => {
        const nearby = await axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=${this.state.lat}&lon=${this.state.lon}`, { headers:
        {"user-key":"***REMOVED***" }})
        const nearbyData = nearby.data.popularity.nearby_res
        console.log(nearbyData)
    }

    render() {
        return (
            <CityContext.Provider
                value = {{
                    ...this.state,
                    getCityId: this.getCityId
                }}>
                {this.props.children}
                </CityContext.Provider>
        )
    }
}

export const withCity = C => props => (
    <CityContext.Consumer>
        { value => <C {...props} {...value}/> }
    </CityContext.Consumer>
)

export default CityProvider