import React, { Component } from 'react'
import AddTodoForm from './AddTodoForm';


class Todo extends Component {
    constructor(props) {
        super(props)
        this.satte = {
            isToggled: false,
            title: props.title,
            description: props.description,
            price: props.price,
        }
    }

    toggler = () => {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
        }))
    }

    handleChange = e => {
        const {name, value} = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            title: this.state.title,
            description: this.state.description,
            price: this.state.price
        }
        this.props.handEdit(this.props._id, updates)
        this.toggler()
    }

    
    render() {
        const {title, description, imgUrl, price, completed, handleDelete, _id} = this.props 

        return (
            <div>
                {!this.state.isToggled ?
                <div style={{backgroundImage: `url(${imgUrl})`}}>
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                    <p>Price: {price}</p>
                    <input type='checkbox' defaultChecked={completed} />
                    <button onClick={() => handleDelete(_id)}>Delete</button>
                    <button onClick={this.toggler}>Edit</button>
                </div>
                :
                <div>
                    <AddTodoForm 
                        {...this.state}
                        btnText="Submit Edit"
                        handleChange={this.handleChange} 
                        handleSubmit={this.handleSubmit}
                    />
                    <button onClick={this.toggler}>Close</button>
                </div>
                }
            </div>
        )
    }
}

export default Todo