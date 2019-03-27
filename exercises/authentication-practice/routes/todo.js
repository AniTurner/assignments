const express = require("express")
const todoRouter = express.Router()
const Todo = require('../models/todo.js')


// Add new post for a specific user
todoRouter.post("/", (req, res, next) => {
    const newTodo = new Todo(req.body)
    newTodo.user = req.user._id
    newTodo.save((err, newTodo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newTodo)
    })
})

// Get all posts belonging to a specific user
todoRouter.get("/", (req, res, next) => {
    Todo.find({user: req.user._id}, (err, userTodos) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(userTodos)
    })
})


module.exports = todoRouter