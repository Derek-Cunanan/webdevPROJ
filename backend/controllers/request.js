const request = require("../models/request")
const driver = require("../models/driver")
const vehicle = require("../models/vehicle")
const user = require("../models/userSchema")

const newRequest =  async (req,res) => {
    try{
        const currUser = await driver.findOne({_id: req.params.id})

        const newReq = new request({
            driver: currUser._id,
            userId: currUser.userId,
            vehicle: req.body.vehicle,
            destination: req.body.destination
        })
        await newReq.save() 
        res.json({
            message: "request  added",
            ok: true
        })
    } catch(e){
        console.log(e)
        res.json({
            message:  "Something went wrong",
            ok: false
        })
    }

}

const getRequestAdmin = async (req,res) => {
    try{
        const allRequest = await request.find({userId: req.params.id})

        res.json({
            allRequest,
            ok: true
        })
    }
    catch{
        res.json({
            message:  "Something went wrong",
            ok: false
        })        
    }
}   

const approveRequest = async (req,res) => {
    try{
        const currRequest = await request.findOne({userId: req.params.id})

        currRequest.isApprove = true
        await currRequest.save()

        res.json({
            driver: currRequest.driver,
            userId: currRequest.userId,
            vehicle: currRequest.vehicle,
            isApprove: currRequest.isApprove,
            destination: currRequest.destination
        })
    }
    catch(e){
        console.log(e)
        res.json({
            message:  "Something went wrong",
            ok: false
        })          
    }

    
}

const rejectRequest = async (req,res) => {
    try{
        const currRequest = await request.findOne({_id: req.params.id})

        currRequest.isApprove = false
        await currRequest.save()

        res.json({
            driver: currRequest.driver,
            userId: currRequest.userId,
            vehicle: currRequest.vehicle,
            isApprove: currRequest.isApprove,
            destination: currRequest.destination
        })
    }
    catch{
        res.json({
            message:  "Something went wrong",
            ok: false
        })          
    }

    
}

module.exports = {newRequest, getRequestAdmin, approveRequest, rejectRequest}
