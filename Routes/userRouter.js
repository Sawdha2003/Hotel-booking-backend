import express from 'express';

import {loginUser , postUsers, getUser  } from '../Controller/UserController.js'


const userRouter = express.Router()

userRouter.post("/",postUsers)

userRouter.post("/login",loginUser)


userRouter.get("/",getUser)





export default userRouter