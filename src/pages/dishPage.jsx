import React, { useRef, useEffect } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { ingredientResult, ingredientSelect, selectedIngredients } from "../features/ingredientSlice";
import { recipesResult } from "../features/recipesSlice";
import Ingredient from "../requests/ingredient";
import Select from 'react-select';
import Recipes from "../requests/recipes";
import Logo from "../assets/logo.png"
import DishCard from '../components/dishCard';
import Footer from '../components/footer';

function DishPage() {
    const ingredientSearchValue = useSelector((state) => state.ingredient.value)
    const ingredientResults = useSelector((state) => state.ingredient.result)
    const ingredientSelected = useSelector((state) => state.ingredient.selectedValues)
    const recipeSelected = useSelector((state) => state.recipe.result)
    const dispatch = useDispatch()
    const timeoutRef = useRef(null);
    const handleSearch = (value) => {
        dispatch(ingredientSelect(value))
    }
    useEffect(() => {
        if (ingredientSelected.length === 0) {
            dispatch(recipesResult([]));
        }
        if (ingredientSearchValue === "") {
            dispatch(ingredientResult([]))
        }
    }, [ingredientSelected, dispatch]);
    useEffect(() => {
        if (ingredientSearchValue) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(() => {
                Ingredient(ingredientSearchValue)
                    .then((data) => {
                        dispatch(ingredientResult(data));
                        console.log(data)
                    })
                    .catch((err) => {
                        console.error("error fetching results", err);
                    });
            }, 500);
        }
    }, [ingredientSearchValue, dispatch]);
    const fetchRecipes = async () => {
        const ingredientNames = ingredientSelected.map((ingredient) => ingredient.label).join(",");

        const data = await Recipes(ingredientNames);

        dispatch(recipesResult(data));
    };
    const handleChange = (selectedOptions) => {
        if (selectedOptions.length <= 15) {
            dispatch(selectedIngredients(selectedOptions));
        } else {
            alert("You can only select up to 15 ingredients.");
        }
    };
    return (
        <div>
        <div className='flex-grow min-h-screen'>
            <AnimatePresence>
                <motion.div
                    className="flex items-center justify-center py-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-[55%] flex flex-col items-center gap-3 max-[1450px]:w-[70%] max-[1175px]:w-[80%] max-[900px]:w-[85%]">
                        <img src={Logo} alt="Logo" className="mb-8 max-[600px]:w-[70%]" />
                        <div className="flex flex-col items-center gap-3 w-full">
                            <p className="text-md text-center">We recommend adding at least <span className="text-[#155724] font-bold">8</span> ingredients for more accurate results, with a maximum limit of <span className="text-[#155724] font-bold">15</span> ingredients.</p>
                            <div className="w-full flex items-center gap-4 justify-between max-[600px]:flex-col">
                                <div className="w-full">
                                    <Select
                                        options={
                                            ingredientResults.results?.map((item) => ({
                                                value: item.id,
                                                label: item.name,
                                                img: item.image
                                            })) || []
                                        }
                                        value={ingredientSelected}
                                        isMulti
                                        placeholder="Enter Ingredients available in your pantry"
                                        onChange={handleChange}
                                        onInputChange={(inputValue) => handleSearch(inputValue)}
                                        className="w-full"
                                        styles={{
                                            control: (baseStyles) => ({
                                                ...baseStyles,
                                                padding: '7px 0 7px 0',
                                            })
                                        }}
                                    />
                                </div>
                                <motion.button
                                    className="py-3 px-4 text-white rounded-xl bg-[#28A745] w-[25%] max-[600px]:w-fit"
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={fetchRecipes}
                                >
                                    Get Dishes
                                </motion.button>
                            </div>
                        </div>
                        <div className="w-full grid grid-cols-3 items-stretch gap-6 mt-8 max-[800px]:grid-cols-2 max-[600px]:grid-cols-1">
                            {recipeSelected.map((recipe, index) => (
                                <div key={recipe.id || index} className="flex">
                                    <DishCard
                                        dishname={recipe.title}
                                        dishlikes={recipe.likes}
                                        dishimg={recipe.image}
                                        missingingredients={recipe.missedIngredients}
                                        recipeID={recipe.id}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
            <Footer />
        </div>
    );
}
export default DishPage