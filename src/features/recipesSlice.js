import { createSlice } from "@reduxjs/toolkit";

const RecipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        result: [],
        recipesInstructions: [],
        missingIngredients: []
    },
    reducers: {
        recipesResult: (state, action) =>  {
            state.result = action.payload
        },
        recipeDetailInstructions: (state, action) => {
            state.recipesInstructions = action.payload
        },
        setMissingIngredients: (state, action) => {
            state.missingIngredients = action.payload;
        },
    }
})

export const {recipesResult, recipeDetailInstructions, setMissingIngredients} = RecipeSlice.actions
export default RecipeSlice.reducer