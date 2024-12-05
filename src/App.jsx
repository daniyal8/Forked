import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing.jsx';
import './App.css'
import { motion, AnimatePresence } from "framer-motion";
import DishPage from './pages/dishPage.jsx';
import Details from './pages/details.jsx';

function App() {
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
  const [clicked, setClicked] = React.useState(false);
  React.useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 300); // Reset after animation
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleClick);
    };
  }, []);
  return (
    <div className='w-full min-h-screen bg-[#DFF4E2]'>
       <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#155724] z-10 rounded-full pointer-events-none max-[1000px]:hidden"
        style={{
          x: cursorPosition.x - 12,
          y: cursorPosition.y - 12,
        }}
        animate={{
          scale: clicked ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/search" element={<DishPage />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App
