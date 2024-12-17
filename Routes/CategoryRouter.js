import express from 'express'
import { createCategory, deleteCategory, getCategoryByName, updateCategory, getCategory } from '../Controller/CategoryController.js'

const CategoryRouter=express.Router();

CategoryRouter.post("/", createCategory)

CategoryRouter.delete("/:name",deleteCategory)


CategoryRouter.get("/:name" ,getCategoryByName)

CategoryRouter.get("/",getCategory);

CategoryRouter.put("/:name", updateCategory)


export default CategoryRouter;


