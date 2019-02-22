import React from 'react'
import CounterDisplay from './CounterDisplay.js'


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
    render() {
        return (
            <div>
                <CounterDisplay counter={this.state.counter}/>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }

}


export default App
