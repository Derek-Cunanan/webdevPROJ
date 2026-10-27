const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

//schema
const user = require("./models/userSchema")
const message = require("./models/messageSchema")
const chat = require("./models/chatSchema")
//routes
const authRoute = require("./routes/auth")
const authMiddleware = require("./middleware/auth")

const app = express()

app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true
}))
app.use(session({
    secret: "sessionSecret",
    resave: false,
    saveUninitialized: false
}))
app.use(express.json())
app.use("/api/auth/", authRoute)

app.get("/test", authMiddleware.authMiddleware, (req,res) => {
    res.json({
        message: "login success",
        userId: req.session.userId
    })
})


mongoose.connect("mongodb+srv://djscunanan_db_user:PSyu75RqiZmKovKD@cluster0.idj2fsp.mongodb.net")
    .then(()=>{console.log("connected")})
    .catch(()=>{console.log("not connected")})

app.listen(3000, (req,res) => {
    console.log("connected server")
})