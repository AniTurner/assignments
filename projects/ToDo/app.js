
const todoListContainer = document.getElementById('toDo-list-container')
const todoForm = document["add-todo-form"]

function getData() {
    axios.get('https://api.vschool.io/ani/todo').then(response => {
 
        const todos = response.data
        listTodos(todos) //will show it is not defined, there we need to define it in another function

    }).catch(err => console.log(err))
}

function listTodos(todosArr) {
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
        deleteBtn.classList.add('x-button')
        deleteBtn.style.background = 'linear-gradient(to right, pink , purple)';

        
        const title = document.createElement('h1')
        const imgUrl = document.createElement('img')

        //Edit the element/ give it content
        todoContainer.classList.add('todo-container')
        title.textContent = todosArr[i].title
        imgUrl.setAttribute('src', todosArr[i].imgUrl)
       

        //Append it to the DOM
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
        
        // edit button eventListener
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

 
    
