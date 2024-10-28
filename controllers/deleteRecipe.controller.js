const deleteRecipe = require('express').Router();
const Recipe = require("../models/Recipe.model"); 

deleteRecipe.delete("/:id",async function(request,response){
try{
    const {id} = request.params;
    const deleted_recipe = await Recipe.findByIdAndDelete(id);
  if(!deleted_recipe){
    return response.status(404).json({
        message:"Recipe not found",
        success:false
    });
  }
  else{
    return response.status(200).json({
        message:"Recipe deleted",
        success:true,
        deleteRecipe:deleted_recipe
    });
  }
}catch(error){
    return response.status(404).json({
        message:"Error",
        success:true,
        error:error.message
    });
}
  
});

module.exports = deleteRecipe;