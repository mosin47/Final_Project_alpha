import React from 'react';
import latter from '../../assets/latter.png';

const Newsletter = () => {
  return (
    <div className="py-16 mx-36 sm:px-8 lg:px-40 flex items-center justify-center relative">
      {/* Background decorative dots */}
      <div className="absolute inset-0 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${latter})` }} />
      
      <div className="max-w-lg text-center z-10">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Hey you, sign up! It only takes a second to be the first to find out about our latest news and promotions...
        </p>
        
        <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Your email"
            className="w-full max-w-xs p-3 border border-gray-300 rounded-l-md focus:outline-none"
          />
          <button className="bg-yellow-400 text-white px-6 py-3 rounded-r-md font-semibold">
            SUBSCRIBE
          </button>
        </div>
      </div>
            
    </div>
  );
};

export default Newsletter;
