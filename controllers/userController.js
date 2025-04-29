import bcrypt from "bcrypt";
import dotenv  from "dotenv";
import User from "../models/userModel.js";

dotenv.config()




// Create Admin

export function creatAdmin(req,res){

const newUserData = req.body


if(newUserData.type == "admin"){

    if(req.user==null){
        res.json({
            message: "You are not loged in. plese log in as an admin to create admin account"
        })
        return
    }

    if(req.user.type !="admin"){
        res.json({
            message: "You are not an admin. plese log in as an admin"
        })
    }
}



newUserData.password = bcrypt.hashSync(newUserData.password, 10)


const user  = new User(newUserData)

user.save().then(()=>{
    res.json({
        message: "User created"
    })
}).catch(()=>{
    res.json({
        message: "User not created"
    })
})

}
