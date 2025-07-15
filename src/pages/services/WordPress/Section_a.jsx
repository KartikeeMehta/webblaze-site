import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

const Section_a = () => {
  const navigate =useNavigate()
  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
        <div className="flex-1">
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold leading-snug text-black">
            Webblaze: Your Go-To
            <span className="text-red-500"> WordPress Development </span>
             Company
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Welcome to Webblaze, your relied on companion for top-notch
            WordPress improvement offerings. Our group of experienced WordPress
            internet site developers and architects are dedicated to handing
            over super solutions that meet your precise business desires.
            Whether you’re seeking out a WordPress freelancer, a WooCommerce
            developer, or a comprehensive WordPress improvement organization,
            Webblaze has got you covered.
          </p>
         
            <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white mt-8 hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
        </div>

        <div className="flex-1">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2024/08/Webblaze-Your-Go-To-WordPress-Development-Company.webp"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-full max-h-[420px]  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_a;
