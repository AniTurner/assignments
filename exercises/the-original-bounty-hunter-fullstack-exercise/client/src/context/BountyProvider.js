import React, {Component} from 'react'
import axios from 'axios'

const BountyContext = React.createContext()


class BountyProvider extends Component {
    constructor() {
        super()
        this.state = {
            bounties: []
        }
    }

    getBounties = () => {
        axios.get("/bounty").then(res => {
            this.setState({
                bounties: res.data
            })
        })
    }

    addBounty = newBounty => {
        axios.post("/bounty", newBounty).then(res => {
            this.setState(prevState => ({
                bounties: [...prevState.bounties, res.data]
            }))
        })
    }


    deleteBounty = _id => {
        axios.delete(`/bounty/${_id}`).then(res => {
            alert(res.data)
            this.setState(prevState => ({
                bounties: prevState.bounties.filter(bounty => bounty._id !== _id)
            }))
        })
    }

    render() {
        return (
            <BountyContext.Provider
                value={{
                    bounties: this.state.bounties,
                    getBounties: this.getBounties,
                    addBounty: this.addBounty,
                    deleteBounty: this.deleteBounty
                }}>
                {this.props.children}
            </BountyContext.Provider>
        )
    }
}

export default BountyProvider


export const withBounties = C => props => (
    <BountyContext.Consumer>
        { value => <C {...props} {...value}/>}
    </BountyContext.Consumer>
)