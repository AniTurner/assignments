const express = require("express")
const app = express()
const morgan = require('morgan')
const PORT = process.env.PORT || 8000


//Middleware
app.use(express.json())
app.use(morgan('dev'))

//Routes
app.use("/bounty", require("./routes/bountyRoutes.js"))

//Listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})