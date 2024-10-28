Recipes App
===========

Description:
============
The Recipes App is a CRUD (Create, Read, Update, Delete) application for managing recipes using Node.js, Express.js, and MongoDB with Mongoose.
This application follows the MVC (Model-View-Controller) architecture,
providing a clean and organized structure for managing recipe data through a RESTful API.

Features:
=========
Create a Recipe: Add a new recipe with details such as name, description, ingredients, and image.
Retrieve All Recipes: Fetch a list of all available recipes.
Get Recipe by ID: Retrieve a single recipe using its unique identifier.
Update a Recipe: Modify the details of an existing recipe by its ID.
Delete a Recipe: Remove a recipe from the database by its ID.

Technologies Used:
==================
Node.js: JavaScript runtime for building scalable network applications.
Express.js: Web framework for Node.js to build APIs quickly and efficiently.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
dotenv: Module to load environment variables from a .env file into process.env.

Repository Link:
=====================
https://github.com/Sriramofficialsit/Recipes_Api.git

Install Dependencies:
=====================
npm install express mongoose dotenv nodemon

Setup Environment Variables:
============================
NODE_ENV=development
HOSTNAME=localhost
PORT=3000

Run the Application:
=====================
npm start


File Structure:
===============
/recipes-app
|-- /controllers
|   |-- createRecipe.controller.js
|   |-- deleteRecipe.controller.js
|   |-- getAllRecipes.controller.js
|   |-- updateRecipe.controller.js
|
|-- /models
|   |-- Recipe.model.js
|
|-- .env
|-- index.js
|-- package.json


Key Files
index.js: The main entry point of the application where the Express server is set up. It connects to the MongoDB database and configures the application to listen on the specified port.

/controllers: Contains the logic for handling API requests for creating, reading, updating, and deleting recipes.

createRecipe.controller.js: Handles the creation of new recipes.
getAllRecipes.controller.js: Retrieves all recipes and individual recipes by ID.
updateRecipe.controller.js: Updates existing recipe details.
deleteRecipe.controller.js: Deletes a recipe by ID.
/models: Contains the Mongoose model for the Recipe, defining the schema for recipe documents in the MongoDB database.
