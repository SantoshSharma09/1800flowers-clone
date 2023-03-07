const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    gender:String,
    number:Number
})

const userModel = mongoose.model("users", userSchema)

module.exports = {
    userModel
}