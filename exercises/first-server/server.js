const express = require('express')
const app = express()
const uuid = require('uuid/v4')


let people = [
    {
        name: 'Rick',
        age: 70,
        _id: uuid()
    },
    {
        name: 'Morty',
        age: 12,
        _id: uuid()
    }
]

app.get('/firstServer', (req, res) => {
    //work out some logic
    //query DB
    //Send response to client
    res.send("Hello to my first Server!")
})

app.use(express.json())

//GET ALL (Collection)
app.get('/people', (req, res) => {
    res.send(people)
})

//GET ONE (Resource)
app.get('/people/:_id', (req, res) => {
    const ID = req.params._id
    const foundPerson = people.find(person => person._id === ID)

    res.send(foundPerson)
})

app.post('/people', (req, res) => {
    //Add ID to the request body
    req.body._id = uuid()
    //Add it to the fake database
    people.push(req.body)
    //Send back updated Object, (or entire collection if you want)
    res.send(req.body)

})

//DELETE - delete one
app.delete('/people/:_id', (req, res) => {
    //Create new array by filtering out the person who has the ID from req.params
    const updatedPeople = people.filter(person => person._id !== req.params._id)
    //Re-assign our old database (array) to the new updated array 
    people = updatedPeople
    //send back updated array to confirm object (resource ) was removed
    res.send(people)
})

//PUT - Update one
app.put('/people/:_id', (req, res) => {
    const foundPerson = people.find(person => person._id == req.params._id)
    Object.assign(foundPerson, req.body)
    res.send(foundPerson)

})

app.listen(7700, () => {
    console.log("Server is running on port 7700")
})