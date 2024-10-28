const createRecipe = require('express').Router();
const Recipe = require("../models/Recipe.model");

createRecipe.post("/",async function(request,response){
   try{
    const newRecipe = new Recipe(request.body);
    await newRecipe.save();
    response.status(200).json({
        message:"Recipe created",
        success:true,
        recipe:newRecipe
    });
   }
   catch(error){
        return response.status(500).json({
            message:"Error in creating recipe",
            success:false,
            error:error.message
        });
   }
});

module.exports = createRecipe;