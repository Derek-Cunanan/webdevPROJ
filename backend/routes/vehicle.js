const express = require("express")
const router = express.Router()

const vehicleController = require("../controllers/vehicle")

router.post("/vehicle", vehicleController.addVehicle)
router.get("/vehicle/:id", vehicleController.getVehicle)
router.put("/vechile/:id", vehicleController.updateVehicle)
router.delete("/vehicle/:id", vehicleController.deleteVehicle)

module.exports = router