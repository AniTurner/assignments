import React, { Component } from 'react'
import axios from 'axios'


class App extends Component {
    constructor() {
        super()
        this.state = {
            city: '',
            cuisinesObj : [],
            lat: '',
            lon: '',
            res_id: [],
            daily_menu: ''
            
        }
    }


    getCityId = city => {
        axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${ city }` , { headers:{"user-key":"***REMOVED***" }}).then(res => {
            // console.log(res.data.location_suggestions[0])
            this.setState({
                lat: res.data.location_suggestions[0].latitude,
                lon: res.data.location_suggestions[0].longitude
            })
            // .data.location[0].city_id
            axios.get(`https://developers.zomato.com/api/v2.1/cuisines?city_id=${ res.data.location_suggestions[0].city_id }`, { headers:{"user-key":"***REMOVED***" }}).then(res => {
                // console.log(res.data)    
                this.setState({
                    cuisinesObj : res.data.cuisines
                })
            // this.setState({
                //     city: res.data
                // })
            }).then(res => {
                axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=${ this.state.lat}&lon=${this.state.lon}`, { headers:
                {"user-key":"***REMOVED***" }}).then(res => {
                    this.setState({
                        res_id : res.data.popularity.nearby_res  
                    })
                    this.updateDailyMenu()
                })
            }).then(res => {
                axios.get(`https://developers.zomato.com/api/v2.1/dailymenu?res_id=${this.state.daily_menu}`, { headers:
                {"user-key":"***REMOVED***" }}).then(res => {
                    console.log(res)
                
            })
        })
                
            // this.setState( { city: res})
        }).catch(err => console.log(err))
                                
    }


    updateDailyMenu = () => {
        this.state.res_id.map((restaurant =>
           //need to click on id and get specific daily-menu
            this.setState({
                daily_menu: restaurant
            }) 
        
        ))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }
    handleSubmit = e => {
        e.preventDefault()
        this.getCityId(this.state.city)
        this.setState({
            city: '',
        })
    }
    
    handleClick = () => {
        
    }
    
    render() {
        
        // const mappedCuisines
        
            // console.log(this.state.daily_menu)
            const mappedCuisines =  this.state.cuisinesObj.map((cuisine,i) => 
                <div key={i}>
                    <span>{cuisine.cuisine.cuisine_name} </span>
                    {/* <h3>{cuisine.cuisine.cuisine_id}</h3> */}
                </div>
                )
                // console.log(this.state.res_id)

           
            // console.log(this.state.daily_menu)
            
        
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    name='city'
                    value={this.state.city}
                    onChange={this.handleChange}
                    placeholder='Enter your city'
                    />
                    <button>Submit</button>
                </form>
                <div onClick={this.handleClick}>
                {mappedCuisines}
                </div>
                {/* {mappedRestaurant} */}
            </div>
        )
    }
}

export default App