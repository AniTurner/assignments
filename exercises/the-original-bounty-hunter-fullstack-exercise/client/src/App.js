import React, {Component} from 'react'
import BountyForm from './components/BountyForm.js'
import BountyList from './components/BountyList.js'
import {withBounties} from './context/BountyProvider.js'


class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isAlive: false,
            bountyAmount: '',
            species: '',
            sideOfTheForce: ''
        }
    }

    componentDidMount() {
       this.props.getBounties()
    }

    handleChange = e => {
        const value = e.target.type === "checkbox"
            ? e.target.checked
            : e.target.value
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const newBounty = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            isAlive: this.state.isAlive,
            bountyAmount: this.state.bountyAmount,
            species: this.state.species,
            sideOfTheForce: this.state.sideOfTheForce,

        }
        this.props.addBounty(newBounty)
        this.setState({ firstName: "", lastName: "", isAlive: false, bountyAmount: "", species: "", sideOfTheForce: "" })
    }

    render() {
        return(
            <div>
                <BountyForm  
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                />
                <BountyList
                    bounties={this.props.bounties}
                    deleteBounty={this.props.deleteBounty}
                    updateBounty={this.props.updateBounty}
                />

            </div>
        )
    }
}


export default withBounties(App)