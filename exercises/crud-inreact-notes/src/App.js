import React, {Component} from 'react'
import axios from 'axios'
import AddTodoForm from './AddTodoForm.js'
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
            todos: [],
            title: '',
            description: '',
            price: ''
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

    handleChange = e => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

        const {title, description, price } = this.state
        //POST request - add new Todo
            //Create Object
        const newTodo = {title, description,price}        

        axios.post('https://api.vschool.io/ani/todo', newTodo).then(response => {
            // console.log(response) to see what response we get -- data (object) 
            //update state
            this.setState(prevState => {
                return {
                    todos: [response.data, ...prevState.todos],
                    title: '',
                    description: '',
                    price: '',
                    
                }
            

            })
                //todos: maintain old todos, and add in new todo from DB
                //input Values: reset back to empty strings
        }).catch(error => console.log(error))
       
    }

    handleDelete = (_id) => {
        //DELETE
        //axios.delete a specific Todo via it's ID
        axios.delete(`https://api.vschool.io/ani/todo/${_id}`).then(response => {
            this.setState(prevState => {
                return {
                    todos: prevState.todos.filter(todo => todo._id !== _id) //as soon as filter finds the one todo id that is equal to the id we are deleting, it will not show it
                }
            })
        }).catch(error => console.log(error))
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
                    price={this.state.price} />
                <TodoList 
                    todos={this.state.todos} 
                    handleDelete={this.handleDelete}
                        />
               
            </div>
        )
    }
}

export default App