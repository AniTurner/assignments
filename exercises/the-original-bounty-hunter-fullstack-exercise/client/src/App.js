import React, {Component} from 'react'
import BountyForm from './components/BountyForm.js'
import BountyList from './components/BountyList.js'
import {withBounties} from './context/BountyProvider.js'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            isAlive: false,
            bountyAmount: undefined,
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
        const {firstName, lastName, isAlive, bountyAmount, species, sideOfTheForce} = this.state
        const newBounty = {
            firstName,
            lastName,
            isAlive,
            bountyAmount,
            species,
            sideOfTheForce

        }
        this.props.addBounty(newBounty)
        this.setState({ 
            firstName: "", 
            lastName: "", 
            isAlive: false, 
            bountyAmount: undefined, 
            species: "", 
            sideOfTheForce: "" 
        })
    }

    render() {
        console.log(this.props.bounties)
        return(
            <div>
                <div>
                    <h1><span>The Original Bounty Hunter</span></h1>
                </div>
                <BountyForm  
                    btnText="Add Bounty"
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