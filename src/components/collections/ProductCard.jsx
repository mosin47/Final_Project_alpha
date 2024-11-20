import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white relative">
      {product.isOnSale && (
        <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs font-bold rounded">
          Sale
        </span>
      )}
      <img src={product.image} alt={product.name} className=" object-contain mb-4" />
      <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
      <div className="flex items-center my-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index} className={`text-yellow-500 ${index < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
            ★
          </span>
        ))}
      </div>
      <div className="flex items-center space-x-2">
        {product.colors.map((color, index) => (
          <span key={index} className={`h-4 w-4 rounded-full bg-${color}-500`} title={color}></span>
        ))}
      </div>
      <div className="mt-2">
        {product.isOnSale ? (
          <div className="text-gray-500 line-through mr-2">${product.originalPrice}</div>
        ) : null}
        <div className="text-lg font-bold">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
