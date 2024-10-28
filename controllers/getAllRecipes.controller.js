const getAllRecipes = require('express').Router();
const Recipe = require("../models/Recipe.model");

getAllRecipes.get("/",async function(request,response){
    try{
        const recipes =await Recipe.find();
    return response.status(200).json({
        message:"Recipes Fetched sucessfully",
        sucess:true,
        recipes:recipes
    })
    }
    catch(error){
        return response.status(500).json({
            message:"Error Fetchig Recipes",
            success:false,
            error:error.message
        })
    }
})
getAllRecipes.get("/:recipeId",async function(request,response){
    try{
        const {recipeId} = request.params;
        const recipe = await Recipe.findById(recipeId);
        if(!recipeId){
            return response.status(404).json({
                message:"Recipe not found",
                success:false
            });
        }
        else{
            return response.status(200).json({
                message:"Recipe Fetched Sucessfully",
                success:true,
                recipe:recipe
            })
        }
    }catch(error){
        return response.status(500).json({
            message:"Error Fetchig Recipes",
            success:false,
            error:error.message
        })
    }
})

module.exports = getAllRecipes;