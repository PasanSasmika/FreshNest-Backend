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


// Get All Services

export function getServices(req,res){
    Service.find({}).then((services)=>{
        res.json(services)
    })
}


// Delete Service

export function deleteServices(req,res){
    if(!isAdmin(req)){
        res.status(403).json({
            message: "Please login as an admin to delete services.!" 
        })
        return
    }

    const serviceId = req.params.serviceId

    Service.deleteOne(
        { _id: serviceId },
    ).then(()=>{
        res.json({
            message: "Service deleted"
        })
    }).catch((error)=>{
        res.status(403).json({
            message: error
        })
    })

}

// Update Services

export function updateServices(req,res){
    if(!isAdmin(req)){
        res.status(403).json({
            message: "Plese login as admin to update Services"
        })
        return
    }

    const serviceId = req.params.serviceId
    const newServiceData = req.body

    Service.updateOne(
        { _id: serviceId },
        newServiceData
    ).then(()=>{
        res.json({
            message: "Service updated..!"
        })
    }).catch((error)=>{
        res.status(500).json({
            message: error
        })
    })
}
