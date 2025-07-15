import React from 'react';
import { useNavigate } from 'react-router-dom';

function Section_a() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

        {/* LEFT: Text Section */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Master <span className="text-red-500">Linux Administration</span> with Webblaze
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Are you trying to enhance your career in IT with Linux administration skills?
            At Webblaze, we provide professional Linux services and training tailored to help you succeed.
            Whether you're a seasoned expert or just starting, our comprehensive programs cover everything
            from basic system management to advanced server configurations.
          </p>
          <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white mt-4 hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* RIGHT: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Webblaze-Your-Go-To-WordPress-Development-Company.webp"
              alt="Linux Administration"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Section_a;
