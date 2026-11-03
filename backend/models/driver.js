const mongoose = require("mongoose")

const driverSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isUsingVehicle: {
        type: Boolean,
        default: false,
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