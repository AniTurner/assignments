
import React, {Component} from 'react'
import {withTodos} from './TodoProvider.js'

class App extends Component {

  componentDidMount() {
    this.props.getTodos()
  }
  render() {
    return(
      <div className={`app-container-${props.theme}`}>
        {this.props.todos.map(todo =>  (
          <div style={{backgroundImage: `url(${todo.imgUrl})`}}> 
              <h1>{todo.title}</h1>
              <h3>{todo.description}</h3>
              <p>Price: {todo.price}</p>
          </div>
        ))}
      </div>
    )
  }
}  


export default withTodos(App)
