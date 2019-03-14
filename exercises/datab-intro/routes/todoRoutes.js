const express = require("express")
const todoRouter = express.Router()
const Todo = require('../models/todo.js')

//GET all
todoRouter.get('/', (req, res) => {
    Todo.find((err, todos) => {
        if(err) {
        //Always handle DB errors first
            //handleError (standard error is 500)
            res.status(500)
            return res.send(err)
        }
        //Send back response
        return res.status(200).send(todos)
    })
}) 


//POST add one
todoRouter.post("/", (req, res) => {
    //Create the new todo object using our Schema (blueprint)
    const newTodo = new Todo(req.body)
    newTodo.save((err, newTodoObj) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(201).send(newTodoObj)
    })
})

//GET one
todoRouter.get("/:_id", (req, res) => {
    Todo.findOne({_id: req.params._id}, (err, foundTodo) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(200).send(foundTodo)
    })
})


//DELETE -remove one
todoRouter.delete("/:_id", (req, res) => {
    //don't use fineOneAndDelete
    Todo.findOneAndRemove({_id: req.params._id}, (err, deleteTodo) => {
        if(err) {
            res.status(500)
            return res.send(err)
        }
        return res.status(202).send(`Successfully deleted Item with ID ${req.params._id}`) //title --> $(deletedTodo.title)
    })
})

//PUT - Update one
todoRouter.put("/:_id", (req, res) => {
    Todo.findOneAndUpdate(
        {_id: req.params._id}, 
        req.body, 
        {new: true}, 
        (err, updatedTodo) => {
            if(err) {
                res.status(500)
                return res.send(err)
            }
            return res.status(201).send(updatedTodo)
    })
})



module.exports = todoRouter