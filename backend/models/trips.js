const mongoose = require("mongoose")

const tripsSchema = new mongoose.Schema ({
    driver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "driver",
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    distance:{
        type: Number,
        required: true
    },
    vehicleId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicle",
        required: true
    }
})

const trips = mongoose.model("trips", tripsSchema)

module.exports = trips
