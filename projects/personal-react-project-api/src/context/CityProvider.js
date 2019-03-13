import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


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
            daily_menu: '',
            cuisinesLoading: true
        }
    }

    getCityId = async city => {
        try {
            const res = await axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${ city }` , { headers:{"user-key":`${process.env.REACT_APP_APIKEY}` }})
            const lat = res.data.location_suggestions[0].latitude
            const lon = res.data.location_suggestions[0].longitude
            const cityId = res.data.location_suggestions[0].city_id
            // console.log(lat, lon, cityId)
            const cuisines = await axios.get(`https://developers.zomato.com/api/v2.1/cuisines?city_id=${ cityId }`, { headers:{"user-key":`${process.env.REACT_APP_APIKEY}` }})
            const cuisineData = cuisines.data.cuisines
            // console.log(cuisineData)
            this.setState({
                lat, lon, cityId, cuisineData,
                cuisinesLoading: false
            }, () =>  this.props.history.push('/cuisines'))
        } catch(err) {
            console.log(err)
        }
    }

    

 

    render() {
        return (
            <CityContext.Provider
                value = {{
                    ...this.state,
                    getCityId: this.getCityId,
                    // getRestaurantList: this.getRestaurantList
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

export default withRouter(CityProvider)