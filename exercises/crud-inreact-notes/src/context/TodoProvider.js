import React, { Component } from 'react'
import axios from 'axios'


class TodoProvider extends Component {
    constructor() {
        super()
        this.state = {
            todos: []
        }
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

    addTodo = (inputs) => {
    const {title, description, price } = inputs
            //POST request - add new Todo
                //Create Object
            const newTodo = {title, description,price}        

            axios.post('https://api.vschool.io/ani/todo', newTodo).then(response => {
                // console.log(response) to see what response we get -- data (object) 
                //update state
                this.setState(prevState => {
                    return {
                        todos: [response.data, ...prevState.todos]
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

    handleEdit = (_id, updates) => {
        axios.put('https://api.vschool.io/ani/todo/${_id}', updates).then(response => {
            const updatedTodo = response.data
            this.setState(prevState => {
                return {
                    todos:prevState.todos.map(todo => todo._id === _id ? updatedTodo : todo)
                }
            })
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <TodoContext.Provider 
                value={{
                    todos: this.state.todos,
                    getTodos: this.getTodos,
                    addTodo: this.addTodo,
                    handleDelete: this.handleDelete,
                    handleEdit: this.handleEdit
                }}>
                {this.props.children}
            </TodoContext.Provider>
        )
   }

}

export const withTodos = C => props => (
    <TodoContext.Consumer>
        {value => <C {...props} {...value}/>}
    </TodoContext.Consumer>
)

export default TodoProvider