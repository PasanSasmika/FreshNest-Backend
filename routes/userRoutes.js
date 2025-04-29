import express from 'express';
import { creatAdmin, loginUser } from '../controllers/userController.js';



const userRouter = express.Router();

userRouter.post("/",creatAdmin)
userRouter.post("/login",loginUser)


export default userRouter;