import React, {Component} from 'react'
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            color: '',
            colorsArr: []
        }
    }

    componentDidMount() {
        axios.get("http://www.colr.org/json/schemes/random/7?scheme_size_limit=5").then(response => {
        console.log(response)    
        this.setState({
                colorsArr: response.data.schemes[0].colors
            })            
            console.log(response.data)

        }).catch(error => console.log(error))
    }

    render() {
        console.log(this.state)

        const mappedColors = this.state.colorsArr.map((item,key) => {
            return (
                <div key={key} style={{backgroundColor: `#${item}`, width: '100%', height: 100, border: '1px solid black'}} ></div>
            )
        })
        return (
            <div style={{backgroundColor: this.state.colorsArr[0]}}>
                {mappedColors}
            </div>
        )
    }
}

export default App