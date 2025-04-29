import Service from "../models/servicesModel.js"
import { isAdmin } from "./userController.js"



// Create Service

export  function createService(req,res){

    if(!isAdmin(req)){
        res.json({
            message: "Please login as an admin to add Services.!" 
        })
        return
    }

    const newServiceData = req.body

    const services = new Service(newServiceData)

    services.save().then(()=>{
        res.json({
            message: "Service added..!"
        })
    }).catch((error)=>{
        console.log(error)
        res.status(403).json({
            message: error
        })
    })

}