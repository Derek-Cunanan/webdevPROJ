const express = require("express")
const router = express.Router()

const requestController = require("../controllers/request")

router.post("/requestDriver/:id", requestController.newRequest)
router.get("/requestAdmin/:id", requestController.getRequestAdmin)
router.put("/approveRequest/:id", requestController.approveRequest)
router.put("/rejectRequest/:id", requestController.rejectRequest)

module.exports = router