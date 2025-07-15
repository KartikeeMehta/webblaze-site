import React from 'react';
import { useNavigate } from 'react-router-dom';

function Section_a() {
  const navigate = useNavigate();

  return (
    <div className="bg-white py-12">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-4 sm:px-6 lg:px-16">

        {/* LEFT: Text + Button */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            <span className="text-red-500">Graphic Design Services</span> via the usage of Webblaze: Elevate Your Visual Presence
          </h1>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            Welcome to Webblaze, a top-rated web development company renowned for delivering top-notch graphic design services.
            Our team of expert graphic designers is dedicated to creating visually stunning designs that captivate audiences and elevate brands.
            Whether you're a startup seeking to establish a visual identity or an established business looking for a fresh look,
            our graphic design services are tailored to meet your unique needs.
          </p>

          <button
            onClick={() => navigate('/Contact_Us')}
            className="bg-[#1C92FF] hover:bg-white hover:text-blue-600 text-white border-2 hover:border-blue-500 font-medium text-md px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Graphic-Design-Services-via-the-usage-of-Webblaze_-Elevate-Your-Visual-Presence.webp"
              alt="Graphic Design"
              className="w-full h-auto object-contain rounded-md shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Section_a;
