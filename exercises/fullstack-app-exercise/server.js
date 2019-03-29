const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const morgan = require('morgan')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 7000


//Middlewares that fire on every request
app.use(express.json()) //parses objects - we get req.body
app.use(morgan('dev')) //it's a dev configuration

//data base connect
mongoose.connect("mongodb://localhost:27017/raddish", {useNewUrlParser: true}, () => {
    console.log("[+] Connected to the DB")
})

//Routes



//Global Error Handler
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})


//Server Listen
app.listen(PORT, () => {
    console.log(`[o] Server is running on Port ${PORT}`) //${} = string template litteral 
})