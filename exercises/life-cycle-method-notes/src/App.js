import React, { Component } from 'react'
import './styles.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            bgColor: "blue",
        }
    }

    componentDidMount() { 
        window.addEventListener('keydown', (e) => { //will enable you to press any key on your keyboard to press on while you are on your website
            if(e.which === 71) {  //if you press letter 'd' the backgroundcolor becomes green -- console.log a letter to find out its 'which'
                this.setState({
                    bgColor: 'green'
                    
                })
            }
        })
        //most commen place to put axios request
        //save response data in state
    }

    componentWillUnmount(){
        window.removeEventListener('keydown')
    }

    render(){
        return(
            <div className='box-container' >
                <div style={{backgroundColor: 'blue'}} className='box'></div>
                <div style={{backgroundColor: 'blue'}} className='box'></div>
                <div style={{backgroundColor: 'blue'}} className='box'></div>
                <div style={{backgroundColor: 'blue'}} className='box'></div>
                <div style={{backgroundColor: 'blue'}} className='box'></div>
                <div style={{backgroundColor: 'blue'}} className='box'></div>
            </div>
        )
    }
}


export default App