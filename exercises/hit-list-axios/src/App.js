import React, {Component} from 'react'
import './styles.css'
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
            console.log(response)
            this.setState({
                hitListCharacters: response.data
            })
        }).catch(error => console.log(error))
    }

    render() {
        const mappedCharacters = this.state.hitListCharacters.map((item) => {
            return (
                <div className="container">
                    <div key={item.id} style={{backgroundImage: `url(${item.image})`}} className="image">
                        <h1 className='pic-h1'>{item.name}</h1>
                    </div>
                </div>
            )
            
        })

        return (
                <div className='main-container'>
                    <div className='header-container'>
                        <img src='https://cdn.shopify.com/s/files/1/1877/8853/files/Don-Vito_grande.jpg?v=1501127874'></img>
                        <h1>Don Corleone's Hit List</h1>
                    </div>
                    <div className='image-text-container'>{mappedCharacters}</div>
                </div>
        )
    }
}

 export default App