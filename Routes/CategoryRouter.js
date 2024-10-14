import express from 'express'
import { Createcategory } from '../Controller/CategoryController.js'

const CategoryRouter=express.Router();

CategoryRouter.post("/", Createcategory)

export default CategoryRouter;


