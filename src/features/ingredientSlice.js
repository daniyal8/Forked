import { createSlice } from "@reduxjs/toolkit";

const IngredientsSlice = createSlice({
    name: 'ingredients',
    initialState: {
        value: null,
        result: [],
        selectedValues: [] 
    },
    reducers: {
        ingredientSelect: (state, action) => {
            state.value = action.payload
        },
        ingredientResult: (state, action) => {
            state.result = action.payload
        },
        selectedIngredients: (state, action) => {
            state.selectedValues = action.payload

        }
    }
})

export const { ingredientSelect, ingredientResult, selectedIngredients } = IngredientsSlice.actions
export default IngredientsSlice.reducer