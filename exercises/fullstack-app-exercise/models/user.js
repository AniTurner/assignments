const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({  //creates a constructor function and makes objects
    username: {
        type: String,
        require: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String, 
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    userImg: String, 
    birthday: Date,
    firstName: String, 
    lastName: String,
    email: String,
    likedPosts: [{
        type: Schema.Types.ObjectId,  //has to be an array of schema id's
        ref: 'Post',
        default: []  //by default give us an empty array
    }],
    votedFor: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
        default: []
    }]

})

// User Auth methods
// pre-save hook for password encryption - Signing up
userSchema.pre("save", function(next) {
    const user = this
    if(!user.isModified("password")) return next()  //if the user has not modified password, return next
    bcrypt.hash(user.password, 10, (err, hash) => {  //10 is how many times it iterates through
        if(err) return next(err)
        user.password = hash 
        next()  
    })
})

// checkpassword method - Logging in
userSchema.methods.checkPassword = function(passwordAttempt, callback){
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err)
        callback(null, isMatch)
    })
}

// without password method
//once they successfully login we want the password to be stripped out for no one to see
//shows username and token but no password
userSchema.methods.withoutPassword = function() {
    const user = this.toObject()
    delete user.password
    return user
}

module.exports = mongoose.model('User', userSchema)