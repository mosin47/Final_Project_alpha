import React, { useState } from "react";
import slideimage1 from "../../assets/assects (22).png";
import slideimage2 from "../../assets/assects (23).png";
import slideimage3 from "../../assets/assects (24).png";
import mainimage1 from "../../assets/assects (3).png";
import mainimage2 from "../../assets/assects (26).png";
import mainimage3 from "../../assets/assects (3).png";

// Sidebar Product Component
const SidebarProduct = ({ image, hoverImage, mainTitle, subTitle, price, discountPrice }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex items-center py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={isHovered ? hoverImage : image} 
        alt={mainTitle} 
        className="w-32 h-32 rounded-md transition-all duration-300" 
      />
      <div className="ml-4">
        <h4 className="font-semibold">{mainTitle}</h4>
        <h5 className="text-gray-500">{subTitle}</h5>
        <p className="text-gray-600">{discountPrice ? `$${discountPrice}` : `$${price}`}</p>
      </div>
    </div>
  );
};

// Main Product Component
const MainProduct = ({ image, hoverImage, mainTitle, subTitle, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col items-center p-4 rounded-md shadow-md text-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={isHovered ? hoverImage : image} 
        alt={mainTitle} 
        className=" mb-4 transition-all duration-300" 
      />
      <h3 className="font-semibold">{mainTitle}</h3>
      <h4 className="text-gray-500">{subTitle}</h4>
      <p className="text-gray-600">${price}</p>
    </div>
  );
}

// Main ProductSlide Component
const ProductSlide = () => {
  const sidebarProducts = [
    { image: slideimage1, hoverImage: slideimage2, mainTitle: "Zigzag Wall", subTitle: "Furniture Range", price: "25.00" },
    { image: slideimage2, hoverImage: slideimage3, mainTitle: "Lowback Pellentesque", subTitle: "Chair", price: "35.00" },
    { image: slideimage3, hoverImage: slideimage1, mainTitle: "Texas Wardrobe", subTitle: "Chair", price: "40.00", discountPrice: "35.00" },
  ];

  const mainProducts = [
    { image: mainimage1, hoverImage: mainimage2, mainTitle: "Royaloak Bell Office", subTitle: "Table", price: "35.00" },
    { image: mainimage2, hoverImage: mainimage3, mainTitle: "Aeron Task", subTitle: "Chair", price: "50.00" },
    { image: mainimage3, hoverImage: mainimage1, mainTitle: "Berlin Entertainment", subTitle: "Unit", price: "30.00" },
  ];

  return (
    <div className="px-28 py-10 bg-white">
      <div className="flex space-x-8">
        {/* Sidebar */}
        <div className="w-1/4">
          <div className="bg-yellow-200 p-4 font-semibold">Furniture</div>
          <div className="border p-4">
            {sidebarProducts.map((product, index) => (
              <SidebarProduct key={index} {...product} />
            ))}
          </div>
          {/* Centered button */}
          <div className="flex justify-center mt-4">
            <button className="bg-gray-200 py-2 px-4">VIEW ALL PRODUCTS →</button>
          </div>
        </div>

        {/* Main Section */}
        <div className="w-3/4">
          <h2 className="text-2xl font-semibold mb-4">Trending Products</h2>
          <div className="grid grid-cols-3 gap-8">
            {mainProducts.map((product, index) => (
              <MainProduct key={index} {...product} />
            ))}
          </div>
          <button className="mx-96 translate-x-full mt-10 bg-yellow-200 py-2 px-4">VIEW ALL</button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
