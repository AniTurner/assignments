import React, {Component} from 'react'
import { withCity } from '../context/CityProvider.js'



class Form extends Component {
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
       
    }

    render() {
// console.log(this.props)
        return (
            <div className='form-div'>
                {/* <header style={{padding: 20, textAlign: 'center', fontSize:30, fontWeight: 'bolder',   textShadow: '1px 1px #ffff'}}>"People who love to eat are always the best people" - Julia Child</header> */}
                <form onSubmit={this.handleSubmit}>
                    <input className='form-input'
                    type='text'
                    name='cityIdInput'
                    value={this.state.cityIdInput}
                    onChange={this.handleChange}
                    placeholder='Enter your city...'
                    />
                    <button className='search-button'>Search</button>
                </form>
            </div>
        )
    }
}

export default withCity(Form)