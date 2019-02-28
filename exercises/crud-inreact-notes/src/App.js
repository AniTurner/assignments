import React, {Component} from 'react'
import axios from 'axios'


//GET - Map out todos
    //TodoList - list of Todos
    //Todo     - Singular Todo that is mapped out in TodoList Component

//App -
    //componentDidMount
    //add place for todos in state
    //componentWillUnmount
        //window.eventListeners
        //setInterval, setTimeout

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get('https://api.vschool.io/natej/todo').then(response => {

        console.log(response) //to see if we get an error or not

        }).catch(error => console.log(error))
            //it's either resolves(.then) or rejects(.catch)
    }


    render() {
        return (
            <div>

            </div>
        )
    }
}

export default App