const mongoose = require('mongoose')
const Schema = mongoose.Schema


const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    summary: String,
    imgUrl: {
        type: String,
        default: "https://cdn5.vectorstock.com/i/1000x1000/02/29/proud-radish-character-cartoon-collection-vector-15670229.jpg"
    },
    votes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",  //what collection is this referencing? -- User
        required: true
    },
    thread: {
        type: String,
        enum: ["recipes", "entertainment", "news", "sports", "culture", "science", "celebrity", "awhcute", "hobbies", "politics", "architecture", "music", "humor", "weather"],
        required: true
    },
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        comment: {
            type: String,
            required: true
        },
        timeStamp: {  //when the comment was made
            type: Date,
            default: Date.now
        }
    }],
    timeStamp: {    //when the post was made
        type: Date,
        default: Date.now
    },
    tags: [{
        type: String
    }]
})

module.exports = mongoose.model("Post", postSchema)