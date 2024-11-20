import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaVimeo } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import applePay from '../../assets/assects (2).svg';
import visa from '../../assets/assects (3).svg';
import mastercard from '../../assets/assects (4).svg';
import discover from '../../assets/assects (5).svg';
import footerBackground from '../../assets/background.png'; // background image
import overlayImage from '../../assets/banner.png'; // overlay image

const Footer = () => {
  return (
    <footer
      className="relative py-12"
      style={{
        backgroundImage: `url(${footerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Semi-transparent overlay with lower opacity */}
      <div className="absolute inset-0"></div>

      {/* Overlay image with low opacity */}
      <img
        src={overlayImage}
        alt="Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          
          {/* Logo and Description */}
          <div className="lg:w-1/4 relative z-10">
            <h2 className="text-2xl font-semibold mb-4">Firemart</h2>
            <p className="text-gray-600 text-sm mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className="flex space-x-4 text-blue-500">
              <FaFacebookF className="w-6 h-6" />
              <FaInstagram className="w-6 h-6" />
              <FaTwitter className="w-6 h-6" />
              <FaTiktok className="w-6 h-6" />
              <FaVimeo className="w-6 h-6" />
            </div>
          </div>

          {/* Links Section */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {/* Your Account */}
            <div>
              <h3 className="font-semibold mb-2">Your Account</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>FAQs</li>
                <li>New Products</li>
                <li>Best Sales</li>
              </ul>
            </div>

            {/* Our Company */}
            <div>
              <h3 className="font-semibold mb-2">Our Company</h3>
              <ul className="text-gray-600 text-sm space-y-1">
                <li>Personal Info</li>
                <li>Address</li>
                <li>Orders</li>
                <li>Credit Slips</li>
                <li>Wishlist</li>
              </ul>
            </div>

            {/* Store Information */}
            <div>
              <h3 className="font-semibold mb-2">Store Information</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li className="flex items-center space-x-2">
                  <MdLocationOn className="text-yellow-500" />
                  <span>Silver business point, India</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MdPhone className="text-yellow-500" />
                  <span>9033697984</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MdEmail className="text-yellow-500" />
                  <span>info@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-4 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-600 relative z-10">
          <p>&copy; 2024, Firemart Sectioned Shopify Theme</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <img src={applePay} alt="Apple Pay" className="w-12" />
            <img src={visa} alt="Visa" className="w-12" />
            <img src={mastercard} alt="MasterCard" className="w-12" />
            <img src={discover} alt="Discover" className="w-12" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
