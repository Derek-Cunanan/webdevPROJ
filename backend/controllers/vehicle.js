const user = require("../models/userSchema")
const vehicle = require("../models/vehicle.js")

const addVehicle = async (req,res) => {
    try{
        const currUser = await user.findOne({_id: req.params.id})

        if(!currUser){
            return res.json({
                message: "User does not exist",
                ok: false
            })
        }

        const addVehicle = new vehicle({
            plateNo: req.body.plateNo,
            odoMeter: req.body.odoMeter,
            brand: req.body.brand,
            type: req.body.type,
            maintenanceDate: req.body.maintenanceDate,
            status: req.body.status,
            userId: currUser._id
        })
        await addVehicle.save()
        res.json({
            message: "Vehicle added",
            ok: true
        })
    }
    catch (e){
        console.log(e)
        res.json({
            message: "Something went wrong",
            ok: false
        })
    }
}
const getAllVehicles = async (req, res) => {
    try {
        const allVehicles = await vehicle.find().populate("userId", "userName");
        if (allVehicles.length > 0) {
            return res.json({
                vehicle: allVehicles,
                ok: true
            })
        } else {
            return res.json({
                vehicle: "No Vehicles Registered",
                ok: true
            })
        }
    } catch {
        res.json({
            message: "something went wrong",
            ok: false
        })
    }
}
const getVehicle = async (req,res) => {
    try{
        const userAllVehicle = await vehicle.find({userId: req.params.id})

        if(userAllVehicle.length > 0){
            return res.json({
                vehicle: userAllVehicle,
                ok: true
            })
        }
        else{
            return res.json({
                message: "No vehicles registered",
                ok: true
            })
        }
    }
    catch{
        res.json({
            message: "Something went wrong",
            ok: false
        })
    }
}
    
const updateVehicle = async (req, res) => {
    try{
        const currVehicle = await vehicle.findOne({_id: req.params.id})

        currVehicle.plateNo = req.body.plateNo
        currVehicle.odoMeter = req.body.odoMeter
        currVehicle.brand = req.body.brand
        currVehicle.type = req.body.type
        currVehicle.status = req.body.status
        currVehicle.maintenanceDate = req.body.maintenanceDate

        await currVehicle.save()

        res.json({
            message: "Vehicle Updated",
            ok: false
        })
    }
    catch{
        res.json({
            message: "Something went wrong",
            ok: false
        })
    }
}

const deleteVehicle = async (req,res) => {
    try{
        await vehicle.findByIdAndDelete(req.params.id)
        res.json({
            message: "deleted",
            ok: true
        })
    }
    catch{
        res.json({
            message: "Something went wrong",
            ok: false
        })
    }
}

module.exports = { addVehicle, getAllVehicles, getVehicle, updateVehicle, deleteVehicle }
