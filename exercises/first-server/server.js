const express = require('express')
const app = express()
const uuid = require('uuid/v4')


const people = [
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

//GET ALL (Collection)
app.get('/people', (req, res) => {
    res.send(people)
})

//GET ONE (Resource)
app.get('/people/:_id', (req, res) => {
    const ID = req.params._id
    const foundPerson = people.find(person => person._id === ID)
})


app.listen(7700, () => {
    console.log("Server is running on port 7700")
})