import React, {Component} from 'react'
import BountyForm from './BountyForm.js'

class Bounty extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editToggle: false,
            firstName: props.firstName,
            lastName: props.lastName,
            isAlive: props.isAlive,
            bountyAmount: props.bountyAmount,
            species: props.species,
            sideOfTheForce: props.sideOfTheForce
        }
    }
    toggler = () => {
        this.setState(prevState => ({
            editToggle: !prevState.editToggle
        }))
    }

    handleChange = e => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [e.target.name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const {firstName, lastName, isAlive, species, sideOfTheForce, bountyAmount} = this.state
        const bountyUpdates = {
            firstName, 
            lastName,
            isAlive,
            species,
            sideOfTheForce,
            bountyAmount
        }
        this.props.updateBounty(this.props._id, bountyUpdates)
        this.toggler()
    }
    render() {
        const {firstName, lastName, isAlive, _id, deleteBounty, bountyAmount, species, sideOfTheForce} = this.props
        return (
            <div style={isAlive ? {backgroundColor: "blue", height: 100} : {backgroundColor: "red", height: 100}}>
                {!this.state.editToggle ?
                    <>
                        <h1>{firstName} {lastName}</h1>
                        <div>{bountyAmount}</div>
                        <option>{species}</option>
                        <option>{sideOfTheForce}</option>
                        <button onClick={() => deleteBounty(_id)}>Delete</button>
                        <button onClick={() => this.toggler}>Edit</button>
                    </>
                    :
                    <>
                        <BountyForm
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            btntext="Submit Edit"
                            {...this.state}
                        />
                        <button onClick={this.toggler}>X</button>
                    </>
                }    
              
            </div>
        )
    }
}

export default Bounty