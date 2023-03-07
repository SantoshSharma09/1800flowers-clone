const express = require("express")
const { userModel } = require("../models/user.model")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

const userRoute = express.Router()

userRoute.post("/register", async (req, res) => {
    const { username, email, password, gender, number } = req.body
    try {
        const user = await userModel.find({ email })
        if (user.length > 0) {
            res.send({ "msg": "Already have an account please login" })

        } else {
            bcrypt.hash(password, 9, async (err, hash) => {
                if (err) {
                    res.send("Something went wrong")
                } else {
                    const user = new userModel({ username, email, password: hash, gender, number })
                    await user.save()
                    res.send({ "msg": "new user has been register" })
                }
            });
        }

    } catch (err) {
        res.send({ "msg": "Can't register" })
    }
})

userRoute.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.find({ email })
        if (user.length > 0) {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: user[0]._id }, "onemg")
                    res.send({ "msg": "Login sucessful", token, username: user[0].username, type: user[0].type })
                } else {
                    res.send({ "msg": "Something went wrong" })
                }
            });
        } else {
            res.send({ "msg": "Wrong crediential" })
        }
    } catch (err) {
        res.send({ "msg": "Something Wrong" })
    }
})

module.exports = {
    userRoute
}