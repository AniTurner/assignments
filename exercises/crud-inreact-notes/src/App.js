import React, {Component} from 'react'
import AddTodoForm from './components/AddTodoForm.js/index.js'
import TodoList from './components/TodoList.js/index.js'
import {withTodos} from './context/TodoProvider.js'

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
            todos: [],
            title: '',
            description: '',
            price: ''
        }
    }

    componentDidMount() {
       this.props.getTodos()
    }

  

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState ({
            title: '',
            description: '',
            price: ''
        })
        
       
    }

    render() {
        console.log(this.state)  //comes after creating setState
        return (
            <div> 
                <AddTodoForm 
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    title={this.state.title}
                    description={this.state.description}
                    price={this.state.price} 
                    btnText="Add Todo"/>
                <TodoList 
                    todos={this.props.todos} 
                    handleDelete={this.props.handleDelete}
                    handleEdit={this.props.handleEdit}
                        />
               
            </div>
        )
    }
}

export default withTodo(App)