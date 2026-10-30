const express = require("express")
const router = express.Router()

const vehicleController = require("../controllers/vehicle")

router.post("/vehicle", vehicleController.addVehicle)
router.get("/vehicle/:id", vehicleController.getVehicle)

module.exports = router