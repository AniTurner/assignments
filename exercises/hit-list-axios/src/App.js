import React from 'react'
import axios from 'axios'


class App extends Component {
    constructor() {
        super()
        this.state = {
            hitListCharacters: []
        }
    }
    componentDidMount() {
        axios.get("https://s3.amazonaws.com/v-school/data/hitlist.json").then(response => {
            this.setState({
                hitListCharacters: response.data.results
            })
        }).catch(error => console.log(error))
    }

    render() {
        const mappedCharacters = this.state.hitListCharacters.map((item) => {
            return (
                <div>
                    <img key={item.id}>{item.image}</img>
                    <h1>{item.name}</h1>
                </div>
            )
            
        })

        return (
            <div>
                {mappedCharacters}
            </div>
        )
    }
}

export default App