import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

function Section_a() {
  const navigate = useNavigate();
  return (
    <div
      className="py-10 md:py-14 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 lg:gap-16">
        
        {/* Left Section */}
        <div className="w-full md:w-[55%]">
          <h2 className="text-2xl sm:text-3xl md:text-[28px] lg:text-[32px] font-bold leading-tight text-black">
            <span className="text-red-500 block mb-1">Shopify Development Services</span>
            with the aid of Webblaze: Elevate Your e commerce Experience
          </h2>
          <p className="mt-3 text-gray-700 text-sm sm:text-base md:text-[16px] leading-[1.6]">
            Webblaze, a leading net improvement employer, offers pinnacle-notch
            Shopify development offerings tailored to fulfill your e commerce
            desires. As a sturdy and flexible platform, Shopify empowers
            corporations of all sizes to create an engaging online purchasing
            enjoy. Our professional developers at Webblaze focus on building
            custom Shopify websites, ensuring they may be visually attractive,
            fairly purposeful, and optimized for overall performance
          </p>

          <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white hover:text-blue-600 mt-5 text-white border-[2px] hover:border-blue-500 font-medium text-sm sm:text-md px-6 py-2.5 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[45%] flex justify-center md:justify-end">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/shopify-development.webp"
            alt="Shopify Developer"
            className="rounded-2xl w-full max-w-[400px] h-auto md:max-h-[360px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Section_a;
