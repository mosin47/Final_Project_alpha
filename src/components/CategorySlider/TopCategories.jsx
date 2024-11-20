import React from 'react';
import { motion } from 'framer-motion';

// Import icons (replace these with actual icon paths or SVGs)
import woodChairIcon from "../../assets/assects (13).png";
import modernSofaIcon from "../../assets/category-2.png";
import woodenTableIcon from "../../assets/category-3.png";
import drawerTableIcon from "../../assets/category-4.png";
import cupboardIcon from "../../assets/category-5.png";

const TopCategories = () => {
  const categories = [
    { icon: woodChairIcon, label: "Wood Chair" },
    { icon: modernSofaIcon, label: "Modern Sofas" },
    { icon: woodenTableIcon, label: "Wooden Table" },
    { icon: drawerTableIcon, label: "Drawer Table" },
    { icon: cupboardIcon, label: "Cupboard" },
  ];

  return (
    <div className="w-full bg-black/5 py-12 ">
      <div className="max-w-5xl mx-auto text-center flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-8 md:mb-0">
          Top Categories
        </h2>

        {/* Categories */}
        <div className="flex space-x-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 group"
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
              <p className="text-gray-600 group-hover:text-gray-800">{category.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      {/* <div className="flex justify-center mt-6">
        <span className="w-2 h-2 bg-gray-800 rounded-full mx-1"></span>
        <span className="w-2 h-2 bg-yellow-400 rounded-full mx-1"></span>
      </div> */}
    </div>
  );
};

export default TopCategories;
