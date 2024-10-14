import mongoose from "mongoose";

const categoryschema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },

        price:{
            type:Number,
            required:true

        },

        features:[
        {
            type:String,
        }
    ],

        description:{

            type:String,
            required:true,
        },

        image:{
            type:String
        }
    }
);

const Category=mongoose.model("category", categoryschema);

export default Category;