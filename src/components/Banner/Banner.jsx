import React from "react";
import banner from "../../assets/banner.png";

function Banner() {
  return (
    <section className="relative bg-gray-50 lg:block hidden">
      {/* Background Image */}
      <div className="relative">
        <img
          src={banner}
          alt="Furniture Background"
          className="w-full h-[500px] object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white px-8">
          <div className="text-center max-w-3xl">
            {/* Subheading */}
            <p className="text-lg font-medium mb-4">
              On Modern Furniture Catalog
            </p>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-tight">
              GET OFFER UP TO <span className="text-red-500">50%</span>
            </h1>

            {/* Description */}
            <p className="mt-4 mb-6">
              Unique and modern furniture product directly from us and get offers.
            </p>

            {/* CTA Button */}
            <button className="bg-yellow-300 hover:bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md transition">
              VIEW COLLECTION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
