import Axios from "axios";

const toDoContainer = document.getElementById('toDo-list-container')

//package axios to get our data from API
// const data = axios.get('https://api.vschool.io/ani/todo')  //our data stores pending promise this way

//that is why we need to write
Axios.get('https://api.vschool.io/ani/todo').then(response => {
    // console.log(reponse) //will show all the object in console, we need data
    // console.log(reponse.data) // put into a variable
    const todos = response.data
    listTodos(todos) //will show it is not defined, there we need to define it in another function

})

function listTodos(todosArr) {
    // console.log(todosArr) //will show empty objects
    //make 1 todo show up, then reuse that code to make all todos show up
    const firstTodo = todosArr[0]

    //How to make it show on the DOM
    //Create Elements
    const title = document.createElement('h1')

    //Edit the element/ give it content
    title.textContent = firstTodo.title
    
    //Append it to the DOM
    toDoContainer.appendChild(title)
}