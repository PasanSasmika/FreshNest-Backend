import express from 'express';
import { createBooking, deleteBooking, getBookingById, getBookings, getBookingsByUserId, updateBooking } from '../controllers/bookingController.js';



const bookingRouter = express.Router();

bookingRouter.post("/",createBooking)
bookingRouter.get("/", getBookings)
bookingRouter.put("/:id", updateBooking)
bookingRouter.get("/:id", getBookingById)
bookingRouter.delete("/:id", deleteBooking)
bookingRouter.get('/user/:userId', getBookingsByUserId);


export default bookingRouter;