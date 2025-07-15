import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

const Section_a = () => {
  const navigate = useNavigate();

  return (
    <div
      className="py-10 md:py-20 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-left px-2 sm:px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Webblaze - Your Ultimate
            <br />
            <span className="text-red-500">JavaScript Development</span>
            <br />
            Partner
          </h1>

          <p className="text-gray-700 text-base sm:text-lg mt-4 sm:mt-6 leading-relaxed">
            Welcome to Webblaze, a leading web development company specializing
            in top-tier JavaScript services. Our expertise spans across
            JavaScript, Node.js, and various related technologies, enabling us
            to deliver comprehensive solutions tailored to meet your unique
            business needs.
          </p>

          <div className="mt-6 sm:mt-8">
            <button
              onClick={() => navigate("/Contact_Us")}
              className="bg-[#1C92FF] hover:bg-white hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-6 py-3 sm:px-8 rounded-xl shadow-md transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/php-development-banner.webp"
            alt="JavaScript Developer"
            className="rounded-2xl w-full max-w-[360px] sm:max-w-[440px] md:max-w-[480px] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_a;
