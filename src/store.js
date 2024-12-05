import { configureStore, combineReducers } from "@reduxjs/toolkit";
import IngredientSlice from "./features/ingredientSlice";
import RecipeSlice from "./features/recipesSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const rootReducer = combineReducers({
    ingredient: IngredientSlice,
    recipe: RecipeSlice,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export default store;
