const express = require("express")
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000


//Middlewares to run on every request
app.use(express.json())
app.use(morgan('dev')) //handle errors

//Routes
app.use("/bounty", require("./routes/bountyRoutes.js"))

//DB Connection
mongoose.connect('mongodb://localhost:27017/bounty-db', {useNewUrlParser: true}, () => {
    console.log('[o] Connected to the DB')
})

//Global Error Handler
app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.message})
})

//Listen
app.listen(PORT, () => {
    console.log(`[+] Server is running on port ${PORT}`)
})