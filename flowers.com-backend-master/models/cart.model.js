const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    img: String,
    qty:Number
})

const cartModel = mongoose.model("carts", cartSchema)

module.exports = {
    cartModel
}