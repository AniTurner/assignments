// import axios from "axios";

const todoListContainer = document.getElementById('toDo-list-container')
const todoForm = document["add-todo-form"]

//package axios to get our data from API
// const data = axios.get('https://api.vschool.io/ani/todo')  //our data stores pending promise this way

//that is why we need to write
//to reuse this make it a function
function getData() {
    axios.get('https://api.vschool.io/ani/todo').then(response => {
    // console.log(reponse) //will show all the object in console, we need data
    // console.log(reponse.data) // put into a variable
        const todos = response.data
        listTodos(todos) //will show it is not defined, there we need to define it in another function

    }).catch(err => console.log(err))
}

function listTodos(todosArr) {
    // console.log(todosArr) //will show empty objects
    //make 1 todo show up, then reuse that code to make all todos show up
    // const firstTodo = todosArr[0] //take this out and add index in todosArr to make it show each one
    for(let i = 0; i < todosArr.length; i++) {

        //How to make it show on the DOM
        //Create Elements
        const todoContainer = document.createElement('div')
        const input = document.createElement('input');
        input.type = 'checkbox';
        if (input.completed) {
            input === true;
        }
        const title = document.createElement('h1')
        const imgUrl = document.createElement('img')

        //Edit the element/ give it content
        todoContainer.classList.add('todo-container')
        
        title.textContent = todosArr[i].title
        imgUrl.setAttribute('src', todosArr[i].imgUrl)
        if(todosArr[i].completed) {
            title.style.textDecoration = "line-through"
        }
    
        //Append it to the DOM
        todoContainer.appendChild(input)
        todoContainer.appendChild(title)
        todoContainer.appendChild(imgUrl)
        todoListContainer.appendChild(todoContainer)
    }
}


todoForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const newTodo = {
        //always an object
        title:  todoForm.title.value,
        price:  todoForm.price.value,
        description:  todoForm.description.value,
        imgUrl:  todoForm.img.value
    }
    todoForm.title.value = ""
    todoForm.price.value = ""
    todoForm.description.value = ""
    todoForm.img.value = ""

    //axios request POST
    axios.post('https://api.vschool.io/ani/todo', newTodo).then(response => {
        todoListContainer.innerHTML = ""
        getData()
    })
})



