import React from 'react';
import slideimage1 from "../../assets/assects (22).png";
import slideimage2 from "../../assets/assects (23).png";
import slideimage3 from "../../assets/assects (24).png";

const specialProducts = [
  {
    id: 1,
    name: 'Zigzag Wall Furniture Range',
    price: 25.00,
    rating: 0,
    image: slideimage1 // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Lowback Pellentesque Chair',
    price: 35.00,
    rating: 5,
    image: slideimage2  // Replace with actual image URL
  },
  {
    id: 3,
    name: 'Multipurpose Laptop Table',
    price: 25.00,
    rating: 0,
    image: slideimage3 // Replace with actual image URL
  },
];

const SpecialProductsSlider = () => {
  return (
    <div className="p-4 mx-6 b rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Special Product</h3>
      {specialProducts.map((product) => (
        <div key={product.id} className="flex items-center mb-4">
          <img src={product.image} alt={product.name} className="w- h-32 object-contain mr-4" />
          <div>
            <h4 className="text-sm font-semibold">{product.name}</h4>
            <div className="flex items-center my-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`text-yellow-500 ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm font-bold">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialProductsSlider;
