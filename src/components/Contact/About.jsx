import React from "react";
import img1 from "../../assets/about1.webp";
import img2 from "../../assets/About2.webp";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <>
    <Navbar />
    <div className="px-6 py-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">About Us</h1>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Left Section */}
        

        {/* Right Section - Image */}
        <div>
          <img
            src= {img1}
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">We Have Everything You Need</h2>
          <p className="text-gray-600">
            Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.
          </p>
          {/* Unordered List */}
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Phasellus volutpat nunc at maximus gravida.</li>
            <li>Praesent aliquet eros at neque suscipit posuere.</li>
          </ul>
          {/* Call to Action */}
          <button className="bg-yellow-400 text-white px-6 py-2 rounded hover:bg-yellow-500">
            Contact Us
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-6">Our Services</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Single Service */}
          <div className="space-y-4">
            <div className="text-yellow-400 text-4xl">📚</div>
            <h3 className="font-medium">Free Resources</h3>
            <p className="text-gray-600">
              Bring to the table win-win survival strategies to ensure proactive domination.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-yellow-400 text-4xl">📦</div>
            <h3 className="font-medium">Multi Purpose</h3>
            <p className="text-gray-600">
              Bring to the table win-win survival strategies to ensure proactive domination.
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-yellow-400 text-4xl">📱</div>
            <h3 className="font-medium">Fully Responsive</h3>
            <p className="text-gray-600">
              Bring to the table win-win survival strategies to ensure proactive domination.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-16 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">We Have Everything You Need</h2>
          <p className="text-gray-600">
            Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit.
          </p>
          {/* Ordered List */}
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Phasellus volutpat nunc at maximus gravida.</li>
            <li>Praesent aliquet eros at neque suscipit posuere.</li>
            <li>Vestibulum efficitur lectus vel nulla hendrerit, sed luctus ligula vehicula.</li>
          </ol>
          {/* Call to Action */}
          <button className="bg-yellow-400 text-white px-6 py-2 rounded hover:bg-yellow-500">
            Contact Us
          </button>
        </div>
        <div>
          <img
            src= {img2}
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    <Footer />
    </>

  );
};

export default About;
