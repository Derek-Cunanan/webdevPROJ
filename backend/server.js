const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const app = express()
app.use(express.json())


const authRoute = require("./routes/auth")
const vehicleRoute = require("./routes/vehicle")
const requestRoute = require("./routes/request")



app.use(cors({
    origin: "http://127.0.0.1:3000",
    credentials: true
}))
app.use("/api/auth", authRoute)
app.use("/api/vehicle", vehicleRoute)
app.use("/api/request", requestRoute)




mongoose.connect("mongodb://localhost:27017/")
    .then(async () => {
        console.log("connected")})
    .catch((error) => {
        console.log("not connected")
        console.error(error.message)
    })
app.listen(3000, ()=> {
    console.log("connected server")
})