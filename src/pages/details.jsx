import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png"
import VegIcon from "../assets/vegetarian.png"
import NonVegIcon from "../assets/non-veg.png"
import ServingDishIcon from "../assets/serving-dish.png"
import ClockIcon from "../assets/clock.png"
import LikesIcon from "../assets/like-icon.png"
import BackArrow from "../assets/arrow.png"
import { Link } from "react-router-dom";
import FallbackImg from "../assets/food-placeholder.png"
import Footer from "../components/footer";


function Details() {
    const recipe = useSelector((state) => state.recipe.recipesInstructions);
    const missingIngredient = useSelector((state) => state.recipe.missingIngredients)
    console.log("missing ingredients", missingIngredient)
    if (!recipe) {
        return <p>Loading...</p>;
    }
    console.log(recipe)

    function stripHtmlTags(htmlString) {
        const div = document.createElement('div');
        div.innerHTML = htmlString;
        return div.textContent || div.innerText || '';
    }
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
                <div className="w-[55%] max-[1450px]:w-[70%] max-[1175px]:w-[80%] max-[900px]:w-[85%]">
                    <div className="flex items-center justify-center">
                        <img src={Logo} alt="Logo" className="mb-8 max-[600px]:w-[70%]" />
                    </div>
                    <div className="mt-6"><Link to="/search"><button className="border py-2 px-4 rounded-full border-[#28A745] w-fit flex items-center gap-2"><img className="w-4" src={BackArrow} /> Back</button></Link></div>
                    <div className="mt-8">
                        <div className="flex flex-col gap-10">
                            <div className="flex items-start gap-6 max-[480px]:flex-col">
                                <img
                                    className="w-[40%] rounded-2xl max-[480px]:w-full"
                                    src={recipe.image || FallbackImg}
                                    onError={(e) => e.currentTarget.src = FallbackImg}
                                    alt="Dish Image"
                                />
                                <div className="flex flex-col gap-4">
                                    <p className="text-2xl font-semibold text-[#135621] max-[600px]:text-lg">{recipe.title}</p>
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <div className="flex items-center gap-3 py-2 px-4 border border-[#28A745] w-fit rounded-full max-[600px]:py-1 max-[600px]:px-2">
                                            <img className="w-6 max-[600px]:w-4" src={ServingDishIcon} />
                                            <p className="text-md max-[600px]:text-xs">Serves {recipe.servings}</p>
                                        </div>
                                        <div className="flex items-center gap-3 py-2 px-4 border border-[#28A745] w-fit rounded-full max-[600px]:py-1 max-[600px]:px-2">
                                            <img className="w-6 max-[600px]:w-4" src={ClockIcon} />
                                            <p className="text-md max-[600px]:text-xs">Ready in {recipe.readyInMinutes} min</p>
                                        </div>
                                        {recipe.vegetarian ? (
                                            <div className="flex items-center gap-3 py-2 px-4 border border-[#28A745] w-fit rounded-full max-[600px]:py-1 max-[600px]:px-2">
                                                <img src={VegIcon} alt="Vegetarian" className="w-6 max-[600px]:w-4" />
                                                <p className="text-md max-[600px]:text-xs">Vegetarian</p>
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-3 py-2 px-4 border border-[#28A745] w-fit rounded-full max-[600px]:py-1 max-[600px]:px-2">
                                                <img src={NonVegIcon} alt="Non-Vegetarian" className="w-6 max-[600px]:w-4" />
                                                <p className="text-md max-[600px]:text-xs">Non-Vegetarian</p>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-3 py-2 px-4 border border-[#28A745] w-fit rounded-full max-[600px]:py-1 max-[600px]:px-2">
                                            <img className="w-6 max-[600px]:w-4" src={LikesIcon} />
                                            <p className="text-md max-[600px]:text-xs" >{recipe.aggregateLikes}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <p className="text-2xl text-[#135621] font-semibold max-[600px]:text-lg">Missing Ingredients:</p>
                                <div className="flex flex-wrap items-center gap-3">
                                    {missingIngredient.map((ingredient, index) => (
                                        <div className='border px-4 py-2 rounded-full w-fit border-[#28A745] max-[600px]:py-1 max-[600px]:px-2' key={index}>
                                            <p className="text-md max-[600px]:text-xs" >{ingredient.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 ">
                                <p className="text-2xl text-[#135621] font-semibold max-[600px]:text-lg">Summary:</p>
                                <p className="text-md text-gray-800 max-[600px]:text-sm">{stripHtmlTags(recipe.summary)}</p>
                            </div>
                            <div>
                                {recipe.analyzedInstructions &&
                                    recipe.analyzedInstructions.length > 0 &&
                                    recipe.analyzedInstructions[0].steps.length > 0 && (
                                        <div className="flex flex-col gap-3">
                                            <p className="text-2xl text-[#135621] font-semibold max-[600px]:text-lg">Cooking Steps:</p>
                                            <ol className="list-decimal list-inside list-yellow-500 text-gray-800 max-[600px]:text-sm">
                                                {recipe.analyzedInstructions[0].steps.map((step, index) => (
                                                    <li key={index} className="mb-2">
                                                        {step.step}
                                                    </li>
                                                ))}
                                            </ol>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
        </div>
        <div className="mt-6">
        <Footer />
        </div>
        </div>
    );
}
export default Details