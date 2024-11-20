import React from 'react';
import Bannerimg from '../../assets/assects__30.png'

const BannerSlider = () => {
  return (
    <div className="p-4 mx-6 bg-yellow-300 rounded-lg text-center relative shadow-md">
      <p className="text-lg font-semibold">Save to 40% off</p>
      <h2 className="text-2xl font-bold mt-1">Modern Chair</h2>
      <img
        src={Bannerimg} // Replace with actual image URL
        alt="Modern Chair"
        className="mx-auto my-4  object-contain"
      />
      <button className="bg-black text-white px-4 py-2 rounded-lg mt-2 hover:bg-gray-800">
        SHOP NOW
      </button>
    </div>
  );
};

export default BannerSlider;
