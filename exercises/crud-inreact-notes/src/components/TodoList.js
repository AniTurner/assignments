import React from 'react'
import Todo from './Todo.js'

const TodoList = (props) => {

    const mappedTodos = props.todos.map(todo => 
                            <Todo 
                                {...todo} 
                                handleDelete={props.handleDelete} 
                                key={todo._id}
                                />)  //the spread ... is instead of saying todo.title, todo.description, etc.

    return (
        <div>
            {mappedTodos}
        </div>
    )
}


export default TodoList