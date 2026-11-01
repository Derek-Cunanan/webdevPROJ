const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
    plateNo: {
        type: String,
        require: true
    },
    odoMeter: {
        type: Number,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    maintenanceDate: {
        type: Date,
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

