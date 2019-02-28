import React from 'react'
import {withCounter} from './CounterProvider'

const App = props => {
        return (
            <div>
                <h1>{props.counter}</h1>
                <button onClick={props.increment}>Increments</button>
            </div>
        )
    
}

export default withCounter(App)
   

