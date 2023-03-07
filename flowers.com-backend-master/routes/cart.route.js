const express = require("express")
const { cartModel } = require("../models/cart.model")

const cartRoute = express.Router()

cartRoute.get("/", async (req, res) => {
    try {
        const cart = await cartModel.find()
        res.send(cart)
    } catch (err) {
        res.send({ "msg": "No Product" })
    }
})


cartRoute.get("/usercart", async (req, res) => {
    const user_id_making_req = req.body.user
    try {
        const cart = await cartModel.find({ user: user_id_making_req })
        res.send(cart)
    } catch (err) {
        res.send({ "msg": "No Product" })
    }
})

cartRoute.post("/add", async (req, res) => {
    try {
        const cart = new cartModel(req.body)
        await cart.save()
        res.send({ "msg": "Product has been added to cart" })
    } catch (err) {
        res.send("Not Added")
    }
})

cartRoute.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
    const note = await cartModel.findOne({ "_id": id })
    const user_id_in_note = note.user
    const user_id_making_req = req.body.user

    try {
        if (user_id_making_req !== user_id_in_note) {
            res.send({ "mag": "Your not autherrished" })
        } else {
            await cartModel.findByIdAndDelete({ "_id": id })
            res.send({ "msg": "Product has been removed from cart" })
        }
    } catch (err) {
        res.send({ "msg": "Product not removed from cart" })
    }
})

module.exports = {
    cartRoute
}