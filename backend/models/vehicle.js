const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
    brand:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        default: "Available"
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

const vehicle = mongoose.model("vehicle", vehicleSchema)

module.exports = vehicle

