import express from 'express';
import { createService } from '../controllers/serviceController.js';



const serviceRouter = express.Router();

serviceRouter.post("/",createService)


export default serviceRouter;