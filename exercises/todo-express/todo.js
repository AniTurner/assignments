const express = require('express')
const app = express()
const uuid = require('uuid/v4')


let todos = [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: "23k4lh23h2"
    }
    
]

app.use(express.json())

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.post('/people', (req, res) => {
    req.body._id = uuid()
    people.push(req.body)
    res.send(req.body)
})

app.delete('./people/:_id', (req, res) => {
    const updatedTodos = todos.filter(todo => tod._id !== req.params._id)
    todos = updatedTodos
    res.send(todos)
})

app.put