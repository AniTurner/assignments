import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
    constructor() {
        super()
        this.state = {
            rickAndMortyCharacters: []
        }
    }
    componentDidMount() {
        axios.get("https://rickandmortyapi.com/api/character").then(response => {
            console.log(response.data.result)
            this.setState({
                rickAndMortyCharacters: response.data.results
            })
        }).catch(error => console.log(error))
    }

    render() {
        console.log(this.state)

        const mappedCharacters = this.state.rickAndMortyCharacters.map((item) => {
            return (
                    <div key={item.id} style={{backgroundImage: `url(${item.image})`,display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', height: 300, width: 300, backgroundSize: 'contain', repeat: 'no-repeat'}}>
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