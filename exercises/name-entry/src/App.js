import React from 'react'
import Name from './Name.js'

class App extends React.Component {
    constructor() {
        super()
        this.state() = {
            nameInput = ""
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
                <Name />
            </div>
        )
    }

}




export default App


