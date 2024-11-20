import React from 'react';
import img from "../../assets/assects (3).png"
const PromoBanner = () => {
  return (
    <div className=" p-6 rounded mb-10">
      <h2 className="text-2xl mb-4 font-semibold">CHAIR </h2>
      <p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer! Accessorize with a straw hat and you're ready for summer! Accessorize with a straw hat and you're ready for summer!
        Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!...
      </p>
      <div className="flex mt-10 items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md">
      <div>
        <h1 className="text-3xl font-bold">Wooden Chair</h1>
        <p className="text-gray-500 mt-2">New And Latest Arrival</p>
        <button className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          SHOP NOW
        </button>
      </div>
      <img
        src={img} // Replace with your image URL
        alt="Wooden Chair"
        className="w-56  mx-10"
      />
    </div>

    </div>
  );
};

export default PromoBanner;
