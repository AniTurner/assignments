const mongoose = require('mongoose')
const Schema = mongoose.Schema //Blueprint how all bounties are going to look like 


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
    bountyAmount: {
        type: Number,
        required: true
    },
    side: {
        type: String,
        enum: ["Sith", "Jedi"],
        required: true
    }
})

module.exports = mongoose.model("Bounty", bountySchema)