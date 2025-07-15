import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/word_PressBackImage.png";

const Section_a = () => {
  const navigate = useNavigate();

  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl">
        
        {/* LEFT: Text */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug text-red-500">
            Node.Js Development{" "}
            <span className="text-black">
              Services: Empowering Your Digital Future
            </span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            In the realm of modern web and application development, Node.Js stands tall as a versatile and powerful framework. At Webblaze, we specialise in harnessing the full potential of Node.Js to craft cutting-edge solutions that drive your business forward.
          </p>
          <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/02/mature-computer-programmer-programming-coding-new-technologies-while-typing-laptop-table-office_11zon-scaled.jpg"
            alt="Node.js Developer"
            className="rounded-3xl w-full max-w-md max-h-[420px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_a;
