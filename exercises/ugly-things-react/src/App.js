import React, {Component} from 'react'
import UglyThingsList from './components/UglyThingsList.js'
import UglyThingsForm from './components/UglyThingsForm.js'
import { withUglyThings } from './context/UglyThingsProvider.js'
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
        this.props.getUglyThings()
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addUglyThings(this.state)
        this.setState({
            title: '',
            imgUrlg: '',
            description: '',
        })

    }

    render() {
        return (
            <div className='main-container'>
                <h1>Ugly Things</h1>
                <UglyThingsForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    title={this.state.title}
                    imgUrl={this.state.imgUrl}
                    description={this.state.description}
                    btnText='Add Ugly Thing'
                />
                <UglyThingsList
                    uglythings={this.props.uglythings}
                    handleDelete={this.props.handleDelete}
                    handleEdit={this.props.handleEdit}
                />
                
                
            </div>

        )
    }
}

export default withUglyThings(App)