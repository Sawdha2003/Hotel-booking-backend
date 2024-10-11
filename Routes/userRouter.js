import express from 'express';

import {loginUser , postUsers  } from '../Controller/UserController.js'


const userRouter = express.Router()

userRouter.post("/",postUsers)

userRouter.post("/login",loginUser)





export default userRouter