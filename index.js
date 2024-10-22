import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './Routes/userRouter.js'
import mongoose from 'mongoose'
import GalleryItemRouter from './Routes/GalleryItemRouter.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import CategoryRouter  from './Routes/CategoryRouter.js'
import RoomRoutes from './Routes/RoomRoutes.js'
import bookingRouter from './Routes/BookingRouter.js'

dotenv.config()


const app = express()

app.use(bodyParser.json())

const connectionString= process.env.MONGO_URL;


app.use((req,res,next)=>{

    const token = req.header("Authorization")?.replace("Bearer ", "")
  
    if(token != null){
      jwt.verify(token,process.env.JWT_KEY,
        (err,decoded)=>{
        if(decoded != null){
          req.user = decoded
          next()
        }else{
          next()
        }
  
      }
    )
    }else{
      next()
    }
  
  });

mongoose.connect(connectionString).then(
    ()=>{
        console.log("Connected to the database")
    }
).catch((err) => {
    console.log("Connection Failed: ", err.message);



});

    

app.use("/api/users",userRouter)
app.use("/api/gallery", GalleryItemRouter)
app.use("/api/category", CategoryRouter)
app.use("/api/rooms",RoomRoutes)
app.use("/api/bookings",bookingRouter)

app.listen(5000,(req,res)=>{

    console.log("Server is running on port 5000")
});

