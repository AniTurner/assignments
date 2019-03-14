const mongoose = require('mongoose')
const Schema = mongoose.Schema


const bountySchema = new Schema ({
    firstName: {
        type: String, 
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    isAlive: {
        type: Boolean, 
        default: false
    },
    bountAmount: {
        type: Number,
        required: true
    },
    species: {
        type: String,
        enum: ["Sith", "Jedi"],
        required: true
    }
})

module.exports = mongoose.model("Bounty", bountySchema)