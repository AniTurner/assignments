import React, {Component} from 'react'
import { withCity } from '../context/CityProvider.js'
import DemoCarousel from '../transitions/DemoCarousel.js'



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
       
    }

    render() {
// console.log(this.props)
        return (
            <div>
                <DemoCarousel />
                <header style={{padding: 20, textAlign: 'center', fontSize:30, fontWeight: 'bolder',   textShadow: '1px 1px #ffff'}}>"People who love to eat are always the best people" - Julia Child</header>
                <div></div>
                <form onSubmit={this.handleSubmit}>
                    <input style={{width: 200, height: 60, marginLeft: 90, border: 'none', backgroundColor: '#50514F', borderRadius: '10%'}}
                    type='text'
                    name='cityIdInput'
                    value={this.state.cityIdInput}
                    onChange={this.handleChange}
                    placeholder='Enter your city...'
                    />
                    <button style={{marginLeft: 130, marginTop: 10, backgroundColor: '#F25F5C' ,display: 'grid', justifyContent: 'center', width: 100, height: 20, fontSize: 15}}>Submit</button>
                </form>
            </div>
        )
    }
}

export default withCity(Home)