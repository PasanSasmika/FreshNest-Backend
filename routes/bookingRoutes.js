import express from 'express';
import { createBooking, deleteBooking, getBookings, updateBooking } from '../controllers/bookingController.js';



const bookingRouter = express.Router();

bookingRouter.post("/",createBooking)
bookingRouter.get("/", getBookings)
bookingRouter.put("/:id", updateBooking)
bookingRouter.delete("/:id", deleteBooking)


export default bookingRouter;