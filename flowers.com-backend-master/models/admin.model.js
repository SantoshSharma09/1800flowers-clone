const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    name:String,
    image:String,
    email:String,
    password:String,
    gender:String,
    phoneNumber:Number
})

const adminModel = mongoose.model("admins", adminSchema)

module.exports = {
    adminModel
}