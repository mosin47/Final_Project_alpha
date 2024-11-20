import React from 'react';
import ProductCard from './ProductCard';
import product1 from '../../assets/assects (22).png';
import product2 from '../../assets/assects (23).png';
import product3 from '../../assets/assects (24).png';
import product4 from '../../assets/assects (25).png';
import product5 from '../../assets/assects (26).png';
import product6 from '../../assets/assects (28).png';

const products = [
  {
    id: 1,
    name: 'Zigzag Wall Furniture Range',
    price: 25,
    colors: ['red', 'blue'],
    image: product1 // Replace with the actual image URL
  },
  {
    id: 2,
    name: 'Lowback Pellentesque Chair',
    price: 35,
    colors: ['green', 'black'],
    image: product2 // Replace with the actual image URL
  },
  {
    id: 3,
    name: 'Lowback Pellentesque Chair',
    price: 35,
    colors: ['green', 'red', 'yellow'],
    image: product3 // Replace with the actual image URL
  },
  {
    id: 4,
    name: 'Lowback Pellentesque Chair',
    price: 35,
    colors: ['green', 'red', 'yellow'],
    image: product4 // Replace with the actual image URL
  },
  {
    id: 5,
    name: 'Lowback Pellentesque Chair',
    price: 35,
    isOnSale: true,
    colors: ['green', 'black'],
    image: product5 // Replace with the actual image URL
  },
  {
    id: 6,
    name: 'Lowback Pellentesque Chair',
    price: 35,
    colors: ['green', 'black'],
    image: product6 // Replace with the actual image URL
  },


  // Add more products here
];


const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
