import Booking from "../models/bookingModel.js";
import Service from "../models/servicesModel.js";
import User from "../models/userModel.js";
import { isCustomer } from "./userController.js";






export const createBooking = async (req, res) => {

      if(!isCustomer(req)){
            res.json({
                message: "Please login as an customer to add Services.!" 
            })
            return
        }

    try {
      const { customer_name, address, date_time, service_id, user_id } = req.body;
  
      
      const service = await Service.findById(service_id);
      if (!service) return res.status(404).json({ message: 'Service not found' });
  
      
      const user = await User.findById(user_id);
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      const newBooking = new Booking({
        customer_name,
        address,
        date_time: new Date(date_time),
        service_id,
        user_id
      });
  
      const savedBooking = await newBooking.save();
      res.status(201).json(savedBooking);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  // Get all bookings
export async function getBookings(req, res)  {
  try {
    const bookings = await Booking.find()
      .populate('service_id', 'name price duration')
      .populate('user_id', 'firstName lastName email');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single booking
export  async function getBookingById(req, res)  {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('service_id')
      .populate('user_id');

    if (!booking) return res.status(404).json({ message: 'Booking not found' });
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update booking
export async function updateBooking(req, res){
    try {
      const booking = await Booking.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!booking) return res.status(404).json({ message: 'Booking not found' });
      res.json(booking);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Delete booking
  export async function deleteBooking(req, res){
    try {
      const booking = await Booking.findByIdAndDelete(req.params.id);
      if (!booking) return res.status(404).json({ message: 'Booking not found' });
      res.json({ message: 'Booking removed' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };