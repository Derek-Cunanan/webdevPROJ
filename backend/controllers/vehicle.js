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

module.exports = { addVehicle }


