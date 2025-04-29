import express from 'express';
import { createService, deleteServices, getServices, updateServices } from '../controllers/serviceController.js';



const serviceRouter = express.Router();

serviceRouter.post("/",createService)
serviceRouter.get("/",getServices)
serviceRouter.delete("/:serviceId", deleteServices)
serviceRouter.put("/:serviceId", updateServices)


export default serviceRouter;