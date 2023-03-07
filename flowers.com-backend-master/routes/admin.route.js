const express = require("express")
const { adminModel } = require("../models/admin.model")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');

const adminRoute = express.Router()

adminRoute.post("/register", async (req, res) => {
    const { name, image, email, password, gender, phoneNumber } = req.body
    try {
        const admin = await adminModel.find({ email })
        if (admin.length > 0) {
            res.send({ "msg": "Already have an account please login" })

        } else {
            bcrypt.hash(password, 9, async (err, hash) => {
                if (err) {
                    res.send("Something went wrong")
                } else {
                    const admin = new adminModel({ name, image, email, password: hash, gender, phoneNumber })
                    await admin.save()
                    res.send({ "msg": "new admin has been register" })
                }
            });
        }

    } catch (err) {
        res.send({ "msg": "Can't register" })
    }
})

adminRoute.post("/login", async (req, res) => {
    const { email, password } = req.body
    try {
        const admin = await adminModel.find({ email })
        if (admin.length > 0) {
            bcrypt.compare(password, admin[0].password, (err, result) => {
                if (result) {
                    const token = jwt.sign({ userID: admin[0]._id }, "onemg")
                    res.send({ "msg": "Login sucessful as Admin", token, name: admin[0].name, email: admin[0].email, image: admin[0].image, phoneNumber: admin[0].phoneNumber,gender:admin[0].gender })
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
    adminRoute
}