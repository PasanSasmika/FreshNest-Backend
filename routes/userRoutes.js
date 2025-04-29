import express from 'express';
import { creatAdmin } from '../controllers/userController.js';



const userRouter = express.Router();

userRouter.post("/",creatAdmin)

export default userRouter;