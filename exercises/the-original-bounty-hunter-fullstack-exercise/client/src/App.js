import React, {Component} from 'react'
import AddBountyForm from './components/AddBountyForm.js'
import BountyList from './components/BountyList.js'
import {withBounties} from './context/BountyProvider.js'


class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: '',
            lastName: '',
            isAlive: false
        }
    }

    componentDidMount() {
       this.props.getBounties()
    }

    handleChange = e => {
        const value = e.target.type === 'checkbox'
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
            isAlive: this.state.isAlive
        }
        this.props.addBounty(newBounty)
        this.setState({ firstName: '', lastName: '', isAlive: false })
    }

    render() {
        return(
            <div>
                <AddBountyForm  
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    {...this.state}
                />
                <BountyList
                    bounties={this.props.bounties}
                    deleteBounty={this.props.deleteBounty}
                />

            </div>
        )
    }
}


export default withBounties(App)