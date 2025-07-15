import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

const Section_a = () => {
  const navigate = useNavigate();

  return (
    <section
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch justify-between gap-12">

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug md:leading-[64px]">
            PHP Development Services via Webblaze
          </h2>
          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            Welcome to Webblaze, your most efficient internet development enterprise that
            specialize in PHP development offerings. With our sizeable information in PHP,
            we deliver top-notch solutions tailored to satisfy your commercial enterprise
            wishes. Whether you’re searching out a PHP developer, Laravel developer, or a
            crew talented in diverse PHP frameworks, Webblaze is here to deliver your
            imaginative and prescient to lifestyles.
          </p>

          <button
            onClick={() => navigate("/Contact_Us")}
            className="mt-8 bg-[#1C92FF] text-white hover:bg-white hover:text-[#1C92FF] border-2 border-[#1C92FF] px-6 sm:px-8 py-3 rounded-xl font-medium shadow-md transition duration-300 w-fit"
          >
            Contact Us
          </button>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/02/rear-view-programmer-working-all-night-long_11zon-1-scaled.jpg"
            alt="PHP Developer"
            className="w-full h-full object-cover rounded-tr-3xl max-h-[600px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_a;
