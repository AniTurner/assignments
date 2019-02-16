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
        todoContainer.setAttribute('id', todosArr[i]._id)
        const input = document.createElement('input');
        input.addEventListener('click', updateItem)
        input.type = 'checkbox';
        const input2 = document.createElement('input');
        
        input.addEventListener('click', deleteItem)
        input2.type = 'h1'
        
        const title = document.createElement('h1')
        const imgUrl = document.createElement('img')
        console.log(input2)

        //Edit the element/ give it content
        todoContainer.classList.add('todo-container')
        input2.textContent = todosArr[i].input2
        title.textContent = todosArr[i].title
        imgUrl.setAttribute('src', todosArr[i].imgUrl)
        if(todosArr[i].completed) {
            title.style.textDecoration = "line-through"
        }
    
        //Append it to the DOM
        todoContainer.appendChild(input2)
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



function updateItem(event) {
    if (event.completed) {
        const updateAToDo = { 
            completed: true

        }
        const parentId = event.target.parentNode.id
        axios.put(`https://api.vschool.io/ani/todo/${parentId}`, updateAToDo ).then(response => {
            console.log(response)
            todoListContainer.innerHTML = ""
            getData()
        }).catch(err => console.log(err)) 
    } else {
        const updateAToDo = {
                completed: false
    
            }
            const parentId = event.target.parentNode.id
            axios.put(`https://api.vschool.io/ani/todo/${parentId}`, updateAToDo ).then(response => {
                console.log(response)
                todoListContainer.innerHTML = ""
                getData()
            }).catch(err => console.log(err)) 
    }
}

function deleteItem(event) {
    if (event.completed) {
        updateItem()
    }

    const parentId = even.target.parentNode.id
    axios.delete(`https://api.vschool.io/ani/todo/${parentId}`, ).then(reponse => {
        console.log(reponse)
        todoListContainer.innerHTML = ""
        getData()
    }).catch(err => console.log(err))
}

// axios.delete(`https://api.vschool.io/ani/todo/:id`).then(function(res) {
//     console.log(res.data)
// }) 
    
