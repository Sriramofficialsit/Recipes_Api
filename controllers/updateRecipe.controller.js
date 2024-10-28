const updateRecipe = require('express').Router();
const Recipe = require("../models/Recipe.model");

updateRecipe.put("/:id",async function(request,response){
  try{
    const{id} = request.params;
    const updatedRecipe = await Recipe.findByIdAndUpdate(id,request.body,{new:true});
    if(!updateRecipe){
        return response.status(404).json({
            message:"Recipe Not Found",
            success:false,
        })
    }
    else{
        return response.status(200).json({
            message:"Recipe Updated Successfully",
            success:true,
            updatedRecipe:updateRecipe
        })
    }
  }
  catch(error){
    return response.status(500).json({
        message:"Error Updating Recipe",
        success:false,
        error:error.message
    })
  }
});

module.exports = updateRecipe;