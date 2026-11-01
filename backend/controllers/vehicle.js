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
            status: req.body.status,
            userId: req.params.id
        })
        await addVehicle.save()
        res.json({
            message: "Vehicle added",
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

module.exports = { addVehicle, getVehicle, updateVehicle, deleteVehicle }

