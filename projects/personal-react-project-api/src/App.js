import React, { Component } from 'react'



class App extends Component {
    constructor() {
        super()
        this.state = {
            city: ''
        }
    }

    handleChange = e => {
        const { city } = e.target

    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            city: '',
        })
    }

    render() {
        return (
            <div>
                <form>
                    <input
                    type='text'
                    name='city'
                    value={city}
                    onChange={handleChange}
                    placeholder='Enter you'
                    />
                </form>
            </div>
        )
    }
}

export default App