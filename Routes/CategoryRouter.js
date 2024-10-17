import express from 'express'
import { Createcategory, deleteCategory, getCategoryByName } from '../Controller/CategoryController.js'

const CategoryRouter=express.Router();

CategoryRouter.post("/", Createcategory)

CategoryRouter.delete("/:name",deleteCategory)

CategoryRouter.get("/searchbyPrice", (req,res)=>{
    res.json({

        message:"Searchbyprice"

    })
})

CategoryRouter.get("/name" ,getCategoryByName)

CategoryRouter.get("/",getCategory);


export default CategoryRouter;


