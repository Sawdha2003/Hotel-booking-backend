import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './Routes/userRouter.js'
import mongoose from 'mongoose'
import GalleryItemRouter from './Routes/GalleryItemRouter.js'
import jwt from 'jsonwebtoken'


const app = express()

app.use(bodyParser.json())

const connectionString="mongodb+srv://Test:123@cluster0.hjpui.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


app.use((req,res,next)=>{

    const token = req.header("Authorization")?.replace("Bearer ", "")
  
    if(token != null){
      jwt.verify(token,"secret",
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


app.listen(5000,(req,res)=>{

    console.log("Server is running on port 5000")
});

