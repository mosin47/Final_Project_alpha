import React from "react";
import banner1 from "../../assets/twobanner-1.png";
import banner2 from "../../assets/twobanner-2.png";  
import banner3 from "../../assets/twobanner-3.png";



const ProductCard = ({ image, title, subtitle }) => (
  <div className="relative  p-4 rounded-md shadow-md flex flex-col items-center text-center">
    <div className="relative overflow-hidden rounded-md group">
      <img
        src={image}
        alt={title}
        className="w-full h-50 object-cover rounded-md transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0  flex flex-col translate-x-1/4 justify-center items-center rounded-md">
        <h3 className="text-2xl font-bold text-black transition-transform duration-100 group-hover:rotate-360">
          {title}
        </h3>
        <p className="text-gray-600 mt-1">{subtitle}</p>
        <button className="mt-4 bg-yellow-200 hover:bg-black hover:text-white transition-all ease-in-out duration-100 text-black font-semibold py-2 px-4 rounded">
      BUY NOW
    </button>
  
      </div>
    </div>
    </div>
);

const ProductGallery = () => {
  const products = [
    {
      image: banner1, // Replace with actual image URL
      title: "Wooden",
      subtitle: "Furniture",
    },
    {
      image: banner2, // Replace with actual image URL
      title: "Modern",
      subtitle: "Tools",
    },
    {
      image: banner3, // Replace with actual image URL
      title: "A Chair",
      subtitle: "Collection",
    },
  ];

  return (
    <div className="flex gap-6 justify-center p-8 bg-white">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          subtitle={product.subtitle}
        />
      ))}
    </div>
  );
};

export default ProductGallery;
