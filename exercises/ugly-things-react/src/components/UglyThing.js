import React, {Component} from 'react'
import UglyThingsForm from './UglyThingsForm.js'


class UglyThing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isToggled: false,
            title: props.title,
            imgUrl: props.imgUrl,
            description: props.description
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            title: this.state.title,
            imgUrl: this.state.imgUrl,
            description: this.state.description
        }

        this.props.handleEdit(this.props._id, updates)
        this.toggler()
    }

    render() {
        const { title, imgUrl, description, handleDelete, _id } = this.props
        
        return (
            <div>
                {!this.state.isToggled
                
                }
            </div>
        )
    }
}