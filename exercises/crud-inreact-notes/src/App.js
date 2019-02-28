import React, {Component} from 'react'
import axios from 'axios'
import TodoList from './TodoList.js'


//GET - Map out todos
    //TodoList - list of Todos
    //Todo     - Singular Todo that is mapped out in TodoList Component

//App -
    //componentDidMount
    //add place for todos in state
    //componentWillUnmount
        //window.eventListeners
        //setInterval, setTimeout

////////////////////////////////

//POST - Components
    //<AddTodoForm />
    //state properties for input values
    //handleChange, handleSubmit

class App extends Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
       this.getTodos()
    }

    getTodos = () => {
         axios.get('https://api.vschool.io/ani/todo').then(response => {

        // console.log(response) //to see if we get an error or not
        this.setState({
            todos: response.data
        })

        }).catch(error => console.log(error))
            //it's either resolves(.then) or rejects(.catch)
    }

    render() {
        console.log(this.state)  //comes after creating setState
        return (
            <div>
                <TodoList todos={this.state.todos}/>
            </div>
        )
    }
}

export default App