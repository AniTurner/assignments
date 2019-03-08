import React, {Component} from 'react'
import { withCity } from '../context/CityProvider.js'



class Home extends Component {
   constructor(){
       super()
       this.state = {
        cityIdInput: ''
    }  
   }
    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })

    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.getCityId(this.state.cityIdInput)
        this.setState({
            cityIdInput: '',
        })
        this.props.history.push('/cuisines')
    }

    render() {
// console.log(this.props)
        return (
            <div>
                <header></header>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    name='cityIdInput'
                    value={this.state.cityIdInput}
                    onChange={this.handleChange}
                    placeholder='Enter your city'
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default withCity(Home)