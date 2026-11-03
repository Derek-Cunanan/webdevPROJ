const mongoose = require("mongoose")

const maintenanceSchema = new mongoose.Schema ({
    odo:{
        type: mongoose.Schema.Types.ObjectId, //was Number before but now references vehicle
        ref: "vehicle",
        required: true
    },
    vehicleId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "vehicle",
        required: true
    }
})

const maintenance = mongoose.model("maintenance", maintenanceSchema)

module.exports = maintenance

