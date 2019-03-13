const express = require("express")
const app = express()
const morgan = require('morgan')


//Middleware
app.use(express.json())3
app.use(morgan('dev'))

//Routes
app.use("/bounty", require("./routes/bounty.js"))

//Listen
app.listen(7700, () => {
    console.log("Server is running on Port 7700")
})