import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from "../../assets/assects (11).png";
import image2 from "../../assets/assects (9).png";
import background from "../../assets/background.png";
import woodChairIcon from "../../assets/assects (13).png";
import modernSofaIcon from "../../assets/category-2.png";
import woodenTableIcon from "../../assets/category-3.png";
import drawerTableIcon from "../../assets/category-4.png";
import cupboardIcon from "../../assets/category-5.png";
import Navbar from '../Navbar/Navbar';

const categories = [
  { icon: woodChairIcon, label: "Wood Chair" },
  { icon: modernSofaIcon, label: "Modern Sofas" },
  { icon: woodenTableIcon, label: "Wooden Table" },
  { icon: drawerTableIcon, label: "Drawer Table" },
  { icon: cupboardIcon, label: "Cupboard" },
];

const Home = () => {
  const images = [image1, image2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <>
      <Navbar />
      <div
        className="relative flex items-center justify-center min-h-screen"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="w-full max-w-5xl bg-white p-6 md:p-8 rounded-lg shadow-lg text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Modern Sofa Set
          </motion.h1>
          <motion.p
            className="text-base md:text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Design Your Home Next Gen, Shop Set Of Product
          </motion.p>
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-4 py-2 md:px-6 md:py-2.5 rounded-full shadow-lg mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            SHOP NOW
          </motion.button>
          <div
            className="relative w-full h-64 md:h-96 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Sofa Set ${currentIndex + 1}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8 }}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </AnimatePresence>
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full shadow-lg hover:bg-yellow-500 focus:outline-none"
              onClick={prevSlide}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-yellow-400 p-2 rounded-full shadow-lg hover:bg-yellow-500 focus:outline-none"
              onClick={nextSlide}
            >
              &#10095;
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${index === currentIndex ? 'bg-yellow-500' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:w-3/4 lg:w-[50%] mx-auto -translate-y-10 bg-white py-8 md:py-12 mb-10">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
      Top Categories
    </h2>
    <div className="flex overflow-x-auto space-x-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 px-2 py-4">
      {categories.map((category, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center min-w-[40%] md:min-w-[20%] group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <motion.img
            src={category.icon}
            alt={category.label}
            className="w-12 h-12 object-contain"
            whileHover={{ scale: 1.1 }}
          />
          <p className="text-gray-600 text-sm md:text-base group-hover:text-gray-800">
            {category.label}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</div>

    </>
  );
};

export default Home;
