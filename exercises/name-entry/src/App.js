import React from 'react'
import EntryForm from './EntryForm.js'
import List from './List.js'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            nameInput: "",
            names: []
        }
    }

    handleChange = (e) => {
        e.persist()
        this.setState ({
            [e.target.name]: e.target.value
            
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState(prevState => {
            return {
                names: [...prevState.names, this.state.nameInput],
                nameInput: ""

            }
        })
    }

    render() {            
        return (
            <div>
                <EntryForm 
                    handleChange= {this.handleChange} 
                    handleSubmit={this.handleSubmit} 
                    nameInput={this.state.nameInput}/>
                    
                <List names= {this.state.names}/>
            </div>
        )
    }

}




export default App


