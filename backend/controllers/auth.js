const user = require("../models/userSchema")
const driver = require("../models/driver")
const bcrypt = require("bcryptjs")

const register = async (req, res) => {
    try{
        const users = await user.findOne({userName: req.body.userName})
        if(users){
            return res.json({
                message: "Username is already taken",
                ok: false
            })
        }

        const hashedPass = await bcrypt.hash(req.body.password, 10)
        const newUser =new  user({  
            userName: req.body.userName,
            password: hashedPass,
        })
        await newUser.save()
        return res.json({
            message: "Register Success",
            ok: true,
        })
    }
    catch(e){
        console.log(e)
        res.json({
            ok: false
        })
    }
}

const login = async (req, res) => {
    try{

        const currUser = await user.findOne({userName: req.body.username})

        if (currUser === null){
            return res.json({
                message: "Invalid username or password",
                ok: false
            })
        }

        const comparePass = await bcrypt.compare(
            req.body.password, currUser.password
        )
        if (comparePass){
            return res.json({
                message: "Login Success",
                ok: true,
                userId: currUser._id
            })
        } else {
            return res.json({
                message: "Invalid username or password",
                ok: false
            })
        }
    }catch{
        res.json({
            message: "something went wrong",
            ok: false
        })
    }

}

const addDriver = async (req, res) => {
    try {
        const drivers = await driver.findOne({userName: req.body.userName})

        if(drivers){
            return res.json({
                message: "Username Already taken",
                ok: false
            })
        }

        const hashedPass = await bcrypt.hash(req.body.password, 10)

        const newDriver = new driver({
            userName: req.body.userName,
            password: hashedPass,
            userId: req.params.id
        })

        await newDriver.save()
        res.json({
            message: "Driver account created",
            ok: true
        })
    } catch {
        res.json({
            message: "something went wrong",
            ok: false
        })
    }
}

const driverLogin = async (req,res) => {
    try{
        const currDriver = await user.findOne({userName: req.body.userName})

        if(currDriver === null){
            return res.json({
                message: "Invalid username or password",
                ok: false
            })        
        }
        const comparePass = await bcrypt.compare(
            req.body.password, currDriver.password
        )

        if(comparePass){
            return res.json({
                userName: currDriver.userName,
                driverId: currDriver._id,
                userId: currDriver.userId
            })
        }else{
            return res.json({
                message: "Invalid username or password",
                ok: false
            })             
        }
    }
    catch{
        res.json({
            message: "something went wrong",
            ok: false
        })
    }
}


module.exports = { register, login, addDriver, driverLogin }
