import bcrypt from "bcrypt";
import dotenv  from "dotenv";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

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


// UserLogin

export function loginUser(req,res){

    User.find({email: req.body.email}).then(
        (users)=>{
            if(users.length == 0){
                res.json({
                    message: "User not found"
                })
            }else {

                const user = users[0]

               const isPasswordCorrect =  bcrypt.compareSync(req.body.password, user.password)

               if(isPasswordCorrect){
                const token = jwt.sign({
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    type: user.type,
                    profilepic: user.profilepic
                }, process.env.SECRET)
                    res.json({
                        message: "Logged in successful",
                        token: token,
                        user: {
                            firstName : user.firstName,
                            lastName : user.lastName,
                            email: user.email,
                            profilepic: user.profilepic,
                            type : user.type
                        }
                    })

               }else{
                res.json({
                    message: "Your Password Is not correct"
                })
               }
            }
        }
    )
}

//Get All Users

export async function getAllUsers(req, res) {
    try {
        const users = await User.find({}, '-password');
        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Error fetching users" });
    }
}


// Fuctions for identifying Users

export function isAdmin(req){

    if(req.user==null){
        return false
    }

    if(req.user.type != "admin"){
        return false
    }

    return true
}

export function isCustomer(req){

    if(req.user==null){
        return false
    }

    if(req.user.type != "customer"){
        return false
    }

    return true

}