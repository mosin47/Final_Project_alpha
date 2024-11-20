import React, { useState } from 'react';
import Productimg1 from "../../assets/assects (22).png";
import Productimg2 from "../../assets/assects (23).png";
import Productimg3 from "../../assets/assects (24).png";
import Productimg4 from "../../assets/assects (25).png";


// Product Card Component
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-48 mb-4">
        {/* Default Image */}
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Hover Image */}
        <img
          src={product.hoverImage}
          alt={product.name}
          className={`w-full h-full object-cover rounded-lg absolute top-0 left-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
      
      {/* Hover icons */}
      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500">
          👁️
        </button>
        <button className="bg-yellow-400 p-2 rounded-full hover:bg-yellow-500">
          ❤️
        </button>
      </div>

      <p className="text-center font-semibold">{product.name}</p>
      <p className="text-center text-gray-700">${product.price}</p>

      {/* Rating */}
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-yellow-500 ${i < product.rating ? 'visible' : 'invisible'}`}>⭐</span>
        ))}
      </div>

      {/* Color Options */}
      <div className="flex justify-center gap-2 mt-2">
        {product.colors.map((color, index) => (
          <span key={index} className="w-4 h-4 rounded-full" style={{ backgroundColor: color }}></span>
        ))}
      </div>
    </div>
  );
};

// Main Product Section Component
const ProductSection = () => {
  const products = [
    { id: 1, name: "Zigzag Wall Furniture Range", price: "25.00", image: Productimg1, hoverImage: Productimg3 ,rating: 4, colors: ['#FF0000', '#000000', '#FFFF00'] },
    { id: 2, name: "Lowback Pellentesque Chair", price: "35.00", image: Productimg2, hoverImage: Productimg1, rating: 5, colors: ['#008000', '#000000', '#FFFF00'] },
    { id: 3, name: "Texas Wardrobe Chair", price: "35.00", image: Productimg3, hoverImage: Productimg4 ,rating: 5, colors: ['#800080', '#008000', '#FFA500'] },
    { id: 4, name: "Driftingwood Wall Shelf", price: "35.00", image: Productimg4, hoverImage: Productimg2, rating: 4, colors: ['#FFD700', '#0000FF', '#FF69B4'] },
  ];

  const [activeTab, setActiveTab] = useState("Featured");

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-6">Special Products</h2>

      {/* Top Row: Tabs and Hot Deals */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        {/* Tabs */}
        <div className="flex gap-4 mb-4 md:mb-0">
          {["Featured", "New Arrivals", "Best Sellers"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-semibold ${activeTab === tab ? 'bg-yellow-400 text-white' : 'text-gray-700'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Hot Deals Section with Left and Right Arrows */}
        <div className="flex items-center  justify-between gap-4 p-4 ">
          <h3 className="text-xl font-semibold">Hot Deals</h3>
          <button className="px-2 py-1 bg-yellow-400 rounded-full hover:bg-yellow-500">←</button>
          <button className="px-2 py-1 bg-yellow-400 rounded-full hover:bg-yellow-500">→</button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-6">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-2 rounded-md">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default ProductSection;
