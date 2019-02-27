import React from 'react'
import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            username: ""
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', (e) => { //will enable you to press any key on your keyboard to press on while you are on your website

        })
        //most commen place to put axios request
        //save response data in state
    }

    componentWillUnmount(){
        window.removeEventListener('keydown')
    }

    render(){
        return(
            <div>
                Lifcycle Methods!
            </div>
        )
    }
}


export default App