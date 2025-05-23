import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRoutes.js';
import serviceRouter from './routes/serviceRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';


dotenv.config()

const app = express();

const mongoUrl = process.env.MONGODB_URI

mongoose.connect(mongoUrl,{})

const connection = mongoose.connection;

connection.once("open",()=>{
  console.log("Database connected");
})

app.use(cors())


app.use(bodyParser.json())

app.use(
  (req,res,next)=>{

  const token =  (req.header("Authorization"))?.replace("Bearer ", "")
 

  if(token != null){
    jwt.verify(token, process.env.SECRET, (error, decoded)=>{
      if(!error){
        req.user = decoded
      }
    })
  }
  next()
  }
)

app.use("/api/users",userRouter)
app.use("/api/service",serviceRouter)
app.use("/api/booking",bookingRouter)



app.listen(
  5000,
  ()=>{
    console.log('Server is running on port 5000');
  }
)
