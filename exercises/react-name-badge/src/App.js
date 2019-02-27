import React from 'react'
import Badges from './Badges.js'
import './styles.css'


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstNameInput: "",
            lastNameInput: "",
            emailInput: "",
            placeOfBirthInput: "",
            phoneInput: "",
            favFoodInput: "",
            aboutYouInput: "",
            badgeCollection: []
        }
    }

    handleChange = (e) => {
        e.persist() 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const badgeObj = {
            firstNameInput: this.state.firstNameInput,
            lastNameInput: this.state.lastNameInput,
            emailInput: this.state.emailInput,
            placeOfBirthInput: this.state.placeOfBirthInput,
            phoneInput: this.state.phoneInput,
            favFoodInput: this.state.favFoodInput,
            aboutYouInput: this.state.aboutYouInput
        }

        if (this.state.firstNameInput === '' || this.state.lastNameInput === '' || this.state.emailInput === '' || this.state.placeOfBirthInput === '' || this.state.phoneInput === '' || this.state.favFoodInput === '' || this.state.aboutYouInput === '' || this.state.firstNameInput <2  || this.state.lastNameInput <2  || this.state.emailInput <2  || this.state.placeOfBirthInput <2  || this.state.phoneInput < 2  || this.state.favFoodInput <2 || this.state.aboutYouInput < 2 ){
            alert('Your input needs to have at least two letters.')
        } else{
            if(!Number(this.state.phoneInput)){
                alert('Your phone number is incorrect.')
            } else {

        this.setState(prevState => {
            return {
                badgeCollection: [...prevState.badgeCollection, badgeObj],
                firstNameInput: "",
                lastNameInput: "",
                emailInput: "",
                placeOfBirthInput: "",
                phoneInput: "",
                favFoodInput: "",
                aboutYouInput: ""
            }
        })
    }
    }
    }

    render() {
        return (
            <div className='container'>
                <div className='form-container'>
                    <div className = 'badge'>
                        <div className='header'></div>
                        <form onSubmit={this.handleSubmit}>
                            <div className='row'>
                                <input 
                                    type="text"
                                    name="firstNameInput"
                                    value={this.state.firstNameInput}
                                    onChange={this.handleChange}
                                    placeholder="First Name"
                                    required/>
                                <input 
                                    type="text"
                                    name="lastNameInput"
                                    value={this.state.lastNameInput}
                                    onChange={this.handleChange}
                                    placeholder="Last Name"
                                    required/>
                            </div>
                            <div className='row'>
                                <input
                                    type="email"
                                    name="emailInput"
                                    value={this.state.emailInput}
                                    onChange={this.handleChange}
                                    placeholder="Email"
                                    required/>
                                <input
                                    type="text"
                                    name="placeOfBirthInput"
                                    value={this.state.placeOfBirthInput}
                                    onChange={this.handleChange}
                                    placeholder="Place of Birth"
                                    required/>
                            </div>
                            <div className='row'>
                                <input
                                    type="number"
                                    name="phoneInput"
                                    value={this.state.phoneInput}
                                    onChange={this.handleChange}
                                    placeholder="Phone"
                                    required/>
                
                                <input
                                    className='input-content'
                                    type="text"
                                    name="favFoodInput"
                                    value={this.state.favFoodInput}
                                    onChange={this.handleChange}
                                    placeholder="Favorite Food"
                                    required/>
                            </div>
                            <div className='row wide'>
                                <input
                                    id='about-you'
                                    type="text"
                                    name="aboutYouInput"
                                    value={this.state.aboutYouInput}
                                    onChange={this.handleChange}
                                    placeholder="Tell us about yourself"
                                    required/>
                            </div>
                            <div className='row'>
                                <button>Submit</button>
                            </div>
                        </form>
                        <div className='footer'></div>
                    </div>
                </div>

                <Badges badgeCollection={this.state.badgeCollection}/>

            </div>

        

        )
    }
}
export default App;