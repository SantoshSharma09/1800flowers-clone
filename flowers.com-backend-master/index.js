const express = require("express")
const cors = require('cors')

const { connection } = require("./config/db")
const { userRoute } = require("./routes/user.route")
const { productRoute } = require("./routes/product.route")
const { cartRoute } = require("./routes/cart.route")

const { productModel } = require("./models/product.model")
const { userModel } = require("./models/user.model")

const { authenticate } = require("./middlewares/authenticate.middleware")
const { adminRoute } = require("./routes/admin.route")

const app = express()
app.use(express.json())
app.use(cors())

app.get("/products", async (req, res) => {

    const { q, limit, skip, sort, order, category } = req.query

    const query = {name: { $regex: q, $options: "i" } }
    let x;
    if (q == undefined && category == undefined ) {
        x = {}
    }
    else if (q !== undefined) {
        x = query
    }
    else if (q === undefined && category !== undefined ) {
        x = { category }
    }

    else if (q !== undefined && category === undefined ) {
        x = query
    }

    let y = {}
    
   if (sort == 'price') {
        y = { price: order }
    }
   
    try {
        const data = await productModel.find(x).sort(y).limit(limit).skip(skip)
        res.send(data)
    }
    catch (err) {
        res.send("Can't get movies")
        console.log(err)
    }

})


app.get("/data/:_id", async (req, res) => {
    const { _id } = req.params
    try {
        const data = await productModel.find({ _id })
        res.send(data)
    } catch (err) {
        res.send({ "msg": "Can't find" })
    }
})



app.use("/users", userRoute)
app.use("/admin", adminRoute)
app.get("/usersdata", async (req, res) => {
    try {
        let users = await userModel.find()
        res.send(users)
    } catch (err) {
        res.send({ "msg": "Users not found" })
    }
})
app.use("/products", productRoute)
app.use(authenticate)
app.use("/cart", cartRoute)



app.listen(4500, async () => {
    try {
        await connection
        console.log("Connected to db")
    } catch (err) {
        console.log("Can't Connected to db")
    }
    console.log("Server is runing at port 4500")
})