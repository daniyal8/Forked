import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/logo.png"
import FoodPlate from "../assets/food-plate.png"
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <AnimatePresence>
          <motion.div
            className="flex items-center flex-col justify-center min-h-screen py-8"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[30%] min-h-[screen] flex flex-col items-center justify-between gap-3 max-[1400px]:w-[40%] max-[1115px]:w-[50%] max-[600px]:w-[80%]">
              <img src={Logo} alt="Logo" className="mb-8" />

              <div className="w-[90%]">
                <img src={FoodPlate} alt="Food Plate" />
              </div>
              <div className="flex flex-col items-center gap-3">
                <h1 className="text-4xl text-[#155724] text-center">
                  Don't Know What To Cook Today?
                </h1>
                <p className="text-lg text-gray-800 text-center">
                  Forked will help you decide. Just enter the ingredients
                  available in your pantry.
                </p>
                <Link to="/search">
                <motion.button
                  className="py-2 px-4 text-white rounded-xl bg-[#28A745]"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started!
                </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Landing
