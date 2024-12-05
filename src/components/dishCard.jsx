import React from 'react'
import LikesIcon from "../assets/like-icon.png"
import { motion } from "framer-motion";
import FallbackImg from "../assets/food-placeholder.png"
import recipeInstructions from '../requests/recipeInstruction';
import { useDispatch, useSelector } from 'react-redux';
import { recipeDetailInstructions, setMissingIngredients } from '../features/recipesSlice';
import { useNavigate } from 'react-router-dom';



const DishCard = ({ dishname, dishimg, dishlikes, missingingredients, recipeID }) => {
    const navigate = useNavigate();
    const recipe = useSelector((state) => state.recipe.recipesInstructions)
    const dispatch = useDispatch()
    const fetchRecipeDetails = async (recipeId) => {
        const recipeDetails = await recipeInstructions(recipeId);
        dispatch(recipeDetailInstructions(recipeDetails))
        dispatch(setMissingIngredients(missingingredients))
        navigate('/details');
    };
    console.log('recipe', recipe)
    return (
        <div className='w-full p-6 bg-white rounded-3xl border-2 border-[#28A745] flex flex-col gap-2 justify-between'>
            <div className='flex flex-col gap-2'>
                <img
                    className="w-full border border-[#6C757D] rounded-3xl"
                    src={dishimg || FallbackImg}
                    onError={(e) => e.currentTarget.src = FallbackImg}
                    alt="Dish Image"
                />
                <p className='text-lg'>{dishname}</p>
            </div>
            <div className='flex items-center gap-2 mt-2'>
                <motion.button
                    className="w-full py-2 px-4 text-white rounded-xl bg-[#28A745]"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => fetchRecipeDetails(recipeID)}
                >
                    See Recipe
                </motion.button>
                <div className='flex items-center gap-1'>
                    <img className='w-4' src={LikesIcon} />
                    <p className='text-sm '>{dishlikes}</p>
                </div>
            </div>
        </div>
    );
}
export default DishCard