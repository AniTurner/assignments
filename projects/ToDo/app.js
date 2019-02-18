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
        //Checkbox
        const input = document.createElement('input');
        input.type = 'checkbox';
        let checkboxId = todosArr[i]._id;
        
        // Edit button
        let editBtn = document.createElement('button');
        editBtn.textContent = "EDIT";
        todoContainer.appendChild(editBtn);

        //delete button
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'X';
        todoContainer.appendChild(deleteBtn);
        deleteBtn.style.background = 'red';
        deleteBtn.style.color = 'white';
        deleteBtn.style.height = '25px';

        



    


        // const input2 = document.createElement('input');
        
        // input2.type = 'h1'
        
        const title = document.createElement('h1')
        const imgUrl = document.createElement('img')
        // console.log(input2)

        //Edit the element/ give it content
        todoContainer.classList.add('todo-container')
        // input2.textContent = todosArr[i].input2
        title.textContent = todosArr[i].title
        imgUrl.setAttribute('src', todosArr[i].imgUrl)
       

        //Append it to the DOM
        // todoContainer.appendChild(input2)
        todoContainer.appendChild(input)
        todoContainer.appendChild(title)
        todoContainer.appendChild(imgUrl)
        todoListContainer.appendChild(todoContainer)  
        
        input.addEventListener('change',function(e){
            e.preventDefault();
            let completed = {};
            completed.completed = this.checked;

            axios.put(`https://api.vschool.io/ani/todo/${checkboxId}`,completed).then(function(response){
                title.classList.toggle('lineThrough');
            })
            // if(input.checked){
            //     console.log(checkboxId);
            //     title.classList.toggle('lineThrough');

            // }
        })
        
        // edit button even listener
        editBtn.addEventListener('click',function(){
            editRequest(todosArr[i],editBtn,todoContainer)
        })

        deleteBtn.addEventListener('click',function(){
            deleteRequest(todosArr[i]._id);  
        })

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



    let inputTitle=  todoForm.title;
    let inputPrice=  todoForm.price;
    let inputDescription=  todoForm.description;
    let inputImgUrl=  todoForm.img;
    let editData;


    //Put request and edit
    function editRequest(todosArr, editBtn, todoContainer){
             
            // Load the data from postman to the inputs on DOM
            inputTitle.value = todosArr.title;  
            inputPrice.value = todosArr.price;  
            inputDescription.value = todosArr.description;  
            inputImgUrl.value = todosArr.imgUrl;  

            editBtn.style.display = 'none';
            //create SAVE button
            let save = document.createElement('button');
            save.textContent = 'SAVE';
            todoContainer.appendChild(save);

            // FIXME - save not showing up
            // save.style.display = 'block';
            

            // let newTitle = todoForm.title;

            save.addEventListener('click',function(){
               
                axios.put(`https://api.vschool.io/ani/todo/${todosArr._id}`, {
                    title: `${inputTitle.value}`,
                    price: `${inputPrice.value}`,
                    description: `${inputDescription.value}`,
                    imgUrl: `${inputImgUrl.value}`
                    
                }).then(function(response){
                    window.location.reload(); 
                   
                }).catch(function(err){
                    console.log(err)
                })
            })
            // save.style.display = 'none';
            // editBtn.style.display = 'block';

        
    }

    function deleteRequest(id){
        axios.delete(`https://api.vschool.io/ani/todo/${id}`).then(function(response){
        window.location.reload();    
        alert('Deleted successfully.');
        });
    }

 
    
