import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        axios.get("https://rickandmortyapi.com/api/character").then(response => {
            console.log(response.data)
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}


export default App