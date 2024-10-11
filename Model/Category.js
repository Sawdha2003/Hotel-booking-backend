import mongoose from "mongoose";

const categoryschema=mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },

        description:{

            type:String,
            required:true,
        },
    }
);

const Category=mongoose.model("category", categoryschema);

export default Category;