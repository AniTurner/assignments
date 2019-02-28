import React from 'react'
import Todo from './Todo'

const TodoList = (props) => {

    const mappedTodos = props.todos.map(todo => <Todo {...todo} key={todo._id}/>)  //the spread ... is instead of saying todo.title, todo.description, etc.

    return (
        <div>
            {mappedTodos}
        </div>
    )
}


export default TodoList