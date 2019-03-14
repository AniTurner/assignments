const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Schema defines what the data should look like (enforces)
const todoSchema = new Schema ({
    title: {
        type: String,
        //default: "Hello" -- give it a default value in case they don't put in a string
        required: true,
        // unique: true, --not necessary right now in this project but is an option
        // lowercase: true,
    },
    description: String,
    isCompleted: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    department: {
        type: String,
        enum: ["Clothing", "Food", "Jewelery"],
        required: true
    }
})

module.exports = mongoose.model("Todo", todoSchema)  //argument1 is the name of the collection
                                               //argument2 which Schema should it be tied to?