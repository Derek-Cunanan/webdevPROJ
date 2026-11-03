const mongoose = require("mongoose")

const requestSchema = new mongoose.Schema({
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "driver",
        required: true
    },
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicle",
        required: true
    },
    isApprove: {
        type: Boolean,
        default: null
    },
    destination: {
        type: String,
        required: true
    }

})

const request = mongoose.model("request", requestSchema)

module.exports = request