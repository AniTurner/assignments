import React, {Component} from 'react'
import './styles.css'



class App extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            imgUrl: '',
            description: ''
        }
    }
    componentDidMount() {
    
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

    }

    render() {
        return (
            <div className='main-container'>
                <h1>Ugly Things</h1>
                
                
            </div>

        )
    }
}