getCityId = city => {
    axios.get(`https://developers.zomato.com/api/v2.1/locations?query=${ city }` , { headers:{"user-key":"***REMOVED***" }}).then(res => {
        this.setState({
            lat: res.data.location_suggestions[0].latitude,
            lon: res.data.location_suggestions[0].longitude
        })
        axios.get(`https://developers.zomato.com/api/v2.1/cuisines?city_id=${ res.data.location_suggestions[0].city_id }`, { headers:{"user-key":"***REMOVED***" }}).then(res => {
            this.setState({
                cuisinesObj : res.data.cuisines
            })
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
            
}).catch(err => console.log(err))