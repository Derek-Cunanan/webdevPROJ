const mongoose = require("mongoose")

const requestSchema = mongoose.Schema({
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "driver",
        required: true
    },
    vehicle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicle",
        required: true
    },
    distance: {
        type: Number,
        required: true
    },

})

const request = mongoose.model("request", requestSchema)

module.exports = request