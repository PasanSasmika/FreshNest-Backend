import bcrypt from "bcrypt";
import dotenv  from "dotenv";
import User from "../models/userModel.js";

dotenv.config()




// Create Admin

export function creatAdmin(req,res){

const newUserData = req.body






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
