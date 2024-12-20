const mongoose = require("mongoose");
const Express = require('express');
const Recipes_App = Express();
Recipes_App.use(Express.json());
require('dotenv').config();

const createRecipe = require("./controllers/createRecipe.controller.js");
const getAllRecipes = require("./controllers/getAllRecipes.controller.js");
const updateRecipe = require("./controllers/updateRecipe.controller.js");
const deleteRecipe = require("./controllers/deleteRecipe.controller.js");

Recipes_App.use("/createRecipe",createRecipe);
Recipes_App.use("/AllRecipes",getAllRecipes);
Recipes_App.use("/updateRecipe",updateRecipe);
Recipes_App.use("/deleteRecipe",deleteRecipe);

async function main(){
    const mongodb_uri = process.env.MONGODB_URI;
    try{
        await mongoose.connect(mongodb_uri);
        console.log("Connected to DB");
    }
    catch(err){
        console.log(err.message);
    }
}

Recipes_App.get("/",function(request,response){
    return response.status(200).json({
        message:"API IS LIVE NOW",
        success:true
    })
})

Recipes_App.listen(process.env.PORT,process.env.HOSTNAME,function(){
    console.log(`Server started http://${process.env.HOSTNAME}:${process.env.PORT}`);
})

main();
