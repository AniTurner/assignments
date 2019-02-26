import React from 'react'
import FormEntry from './FormEntry.js'
import Badges from './Badges.js'


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

    render() {
        return (
            <div>
                <FormEntry 
                    handleChange= {this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    firstNameInput={this.state.firstNameInput}
                    lastNameInput={this.lastNameInput}
                    emailInput={this.emailInput}
                    placeOfBirthInput={this.placeOfBirthInput}
                    phoneInput={this.phoneInput}
                    favFoodInput={this.favFoodInput}
                    aboutYouInput={this.aboutYouInput}/>
                <Badges badgeCollection={this.state.badgeCollection}/>
            </div>
        )
    }


}


export default App