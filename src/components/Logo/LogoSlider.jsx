import React from 'react';
import logo1 from "../../assets/Brand-Logo-1.png";
import logo2 from "../../assets/Brand-Logo-2.png";
import logo3 from "../../assets/Brand-Logo-3.png";
import logo4 from "../../assets/Brand-Logo-4.png";
import logo5 from "../../assets/Brand-Logo-5.png";
import logo6 from "../../assets/Brand-Logo-6.png";

const logos = [
  { id: 1, imageUrl: logo1 },
  { id: 2, imageUrl: logo2 },
  { id: 3, imageUrl: logo3 },
  { id: 4, imageUrl: logo4 },
  { id: 5, imageUrl: logo5 },
  { id: 6, imageUrl: logo6 },
];

// Duplicate the logos array for infinite scrolling effect
const infiniteLogos = [...logos, ...logos];

const LogoSection = () => {
  return (
    <div className="container mx-auto py-8 overflow-hidden px-16 mt-10">
      <div className="flex animate-scroll space-x-10">
        {infiniteLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-[300px] h-[100px]">
            <img src={logo.imageUrl} alt={`Logo ${logo.id}`} className="w-full h-full object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSection;
