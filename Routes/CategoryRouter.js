import express from 'express'
import { Createcategory, deleteCategory, getCategoryByName, updateCategory, getCategory } from '../Controller/CategoryController.js'

const CategoryRouter=express.Router();

CategoryRouter.post("/", Createcategory)

CategoryRouter.delete("/:name",deleteCategory)


CategoryRouter.get("/:name" ,getCategoryByName)

CategoryRouter.get("/",getCategory);

CategoryRouter.put("/:name", updateCategory)


export default CategoryRouter;


