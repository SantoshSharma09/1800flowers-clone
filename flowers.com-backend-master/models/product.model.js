const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    img: String,
    qty:Number
    
})

const productModel = mongoose.model("products", productSchema)

module.exports = {
    productModel
}