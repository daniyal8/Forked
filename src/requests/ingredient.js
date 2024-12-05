import axios from "axios";

const API_KEY = import.meta.env.VITE_RECIPE_API

const Ingredient = async (ingredientName) => {
    try {
        const response = await axios.get(
            `https://api.spoonacular.com/food/ingredients/search`,
            {
                params: {
                    query: ingredientName,
                    number: 10,
                    apiKey: API_KEY
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching ingredient data:", error);
    }
};
export default Ingredient