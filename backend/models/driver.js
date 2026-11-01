const mongoose = require("mongoose")

const driverSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

const driver = mongoose.model("driver", driverSchema)

module.exports = driver