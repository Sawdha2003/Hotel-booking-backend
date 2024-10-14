import Category from "../Model/Category.js";

export function Createcategory(req,res){

    if (!req || !res) {
        res.status(401).json({
          message: "Unauthorized",
        });
        return;
      }
    

      if (req.Users && req.Users.type !== "admin") {
        res.status(403).json({
          message: "Forbidden",
        });
        return;
      }

    const newCategory = new Category(req.body)
    newCategory.save().then(

        (result)=>{
            res.json(
                {
                    message:"Category Created Successfully",
                    result: result
                }
            )
        }
    ).catch(
        (err)=>{
            res.json(

                {
                    message:"Category creation failed",
                    error : err
                }
            )
        }
    )
}