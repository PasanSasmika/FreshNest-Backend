import express from 'express';
import { creatAdmin, getAllUsers, loginUser } from '../controllers/userController.js';



const userRouter = express.Router();

userRouter.post("/",creatAdmin)
userRouter.get("/",getAllUsers)
userRouter.post("/login",loginUser)


export default userRouter;