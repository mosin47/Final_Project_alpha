import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import img from "../../assets/assects (27).png";
const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="px-6 py-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Contact</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={img} // Replace with your image link
            alt="Contact"
            className="mx-auto  shadow-lg"
          />
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">
            We'd Love to Hear From You, Let's Get In Touch!
          </p>

          <div className="space-y-4">
            <p className="text-gray-800">
              <strong>Address:</strong> Silver business point, India
            </p>
            <p className="text-gray-800">
              <strong>Phone:</strong> 9033697984
            </p>
            <p className="text-gray-800">
              <strong>Email:</strong> info@gmail.com
            </p>
            <p className="text-gray-800">
              <strong>Additional Information:</strong> We are open: Monday -
              Saturday, 10AM - 5PM, and closed on Sunday. Sorry for that.
            </p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6">
            <h3 className="text-lg font-medium">Social</h3>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 transition text-2xl"
              >
                🔗
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 transition text-2xl"
              >
                🔗
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 transition text-2xl"
              >
                🔗
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 transition text-2xl"
              >
                🔗
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-800 transition text-2xl"
              >
                🔗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83946200542!2d77.0688993!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDMxJzM3LjciTiA3N8KwMDQnMDAuNSJF!5e0!3m2!1sen!2sin!4v1682367675684!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
    <Footer />
    </>


  );
};

export default Contact;
