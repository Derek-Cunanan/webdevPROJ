const express = require("express")
const router = express.Router()

const vehicleController = require("../controllers/vehicle")

router.post("/:id", vehicleController.addVehicle)
router.get("/all", vehicleController.getAllVehicles)
router.get("/:id", vehicleController.getVehicle)
router.put("/:id", vehicleController.updateVehicle)
router.delete("/:id", vehicleController.deleteVehicle)

module.exports = router