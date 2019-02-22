import React from 'react'
import CounterDisplay from './CounterDisplay.js'
import CounterControls from './CounterControls.js'

class App extends React.Component{
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    handleClick = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }

    handleIncrement = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter -1
            }
        })
    }

    handleMultiply = () => {
        this.setState(prevState => {
            return {
                counter: prevState.counter * 2
            }
        })
    }

    handleZero = () => {
        this.setState(prevState => {
            return {
                counter: 0
            }
        })
    }

    render() {
        return (
            <div>
                <CounterDisplay counter={this.state.counter}/>
                <CounterControls 
                    handleClick={this.handleClick} 
                    handleIncrement={this.handleIncrement} 
                    handleMultiply={this.handleMultiply}
                    handleZero={this.handleZero}/>
            </div>
        )
    }

}


export default App
