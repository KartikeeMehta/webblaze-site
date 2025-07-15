import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

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
          <h2 className="text-2xl md:text-4xl font-bold leading-snug text-black">
            Webblaze: Expert{" "}
            <span className="text-red-500">Vue.Js Development Services</span>
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Welcome to Webblaze, your go-to web development company specializing in Vue.Js development services. Vue.Js is a progressive JavaScript framework used to create dynamic and high-performing web applications. Whether you are building a single-page app or a complex enterprise-level solution, Webblaze delivers scalable, maintainable, and efficient applications tailored to your business needs.
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
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/Webblaze-Your-Go-To-WordPress-Development-Company.webp"
            alt="Vue Developer"
            className="w-full max-w-md rounded-3xl object-cover"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Section_a;
