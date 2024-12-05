import axios from "axios";

const API_KEY = import.meta.env.VITE_RECIPE_API;

const Recipes = async (ingredients) => {
  try {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/findByIngredients`,
      {
        params: {
          ingredients: ingredients,
          number: 15,                  
          apiKey: API_KEY               
        }
      }
    );
    return response.data; 
  } catch (error) {
    console.error("Error fetching recipes data:", error);
    return [];
  }
};

export default Recipes;
