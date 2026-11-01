const express = require("express")
const mongoose = require("mongoose")
const session = require("express-session")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const user = require("./models/userSchema")
const vehicle = require("./models/vehicle")
const driver = require("./models/driver")
const request = require("./models/request")
const trips = require("./models/trips")
const maintenance = require("./models/maintenancelogs")

const authRoute = require("./routes/auth")
const vehicleRoute = require("./routes/vehicle")

const app = express()

app.use(cors({
    origin: "http://127.0.0.1:5500",
    credentials: true
}))

app.use(express.json())
app.use("/api/auth/", authRoute)
app.use("/api/vehicle", vehicleRoute)

const mongoUri = process.env.MONGODB_URI

if (!mongoUri) {
    console.error("MONGODB_URI is missing. Add it to the .env file.")
    process.exit(1)
}

mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 15000 })
    .then(async () => {
        console.log("connected")
        console.log(`database: ${mongoose.connection.name}`)

        const models = [user, vehicle, driver, request, trips, maintenance]
        for (const model of models) {
            const collectionName = model.collection.collectionName
            const existing = await mongoose.connection.db.listCollections({ name: collectionName }).toArray()

            if (existing.length === 0) {
                await mongoose.connection.db.createCollection(collectionName)
            }
        }

        app.listen(3000, () => {
            console.log("connected server on port 3000")
        })
    })
    .catch((error) => {
        console.log("not connected")
        console.error(error.message)
        process.exit(1)
    })
