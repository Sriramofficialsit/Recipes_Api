const mongoose = require("mongoose");

const RecipeSchema = mongoose.Schema({
    id:{
        type:Number,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true,
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('recipe', RecipeSchema);

