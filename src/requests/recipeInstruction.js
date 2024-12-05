import axios from "axios";

const API_KEY = import.meta.env.VITE_RECIPE_API


const recipeInstructions = async (recipeID) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeID}/information`,
            {
                params: { apiKey: API_KEY },
            }
        );
        return response.data

    } catch (error) {
        console.error("Error fetching recipe nutrition data:", error);
    }
}
export default recipeInstructions

