import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

const Section_a = () => {
  const navigate = useNavigate();

  return (
    <section
      className="py-10 md:py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-stretch gap-10 rounded-3xl">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug text-black">
            Transforming Ideas into Dynamic Interfaces with React.Js Development Services
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            At Webblaze, we specialise in leveraging the strength of React.Js to
            craft seamless and interactive net applications that captivate users
            and power enterprise growth. As a main net improvement organisation,
            we deliver unheard of know-how in harnessing React.Js to build
            scalable answers tailored to your unique needs.
          </p>

          <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white mt-6 sm:mt-8 hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-6 sm:px-8 py-3 rounded-xl shadow-md transition duration-300 w-fit"
          >
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/Webblaze-Your-Go-To-WordPress-Development-Company.webp"
            alt="WordPress Developer"
            className="w-full h-full max-h-[460px] rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_a;
