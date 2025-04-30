import express from 'express';
import { creatAdmin, createCustomer, getAllUsers, loginUser } from '../controllers/userController.js';



const userRouter = express.Router();

userRouter.post("/",creatAdmin)
userRouter.get("/",getAllUsers)
userRouter.post("/login",loginUser)
userRouter.post("/signup",createCustomer)


export default userRouter;