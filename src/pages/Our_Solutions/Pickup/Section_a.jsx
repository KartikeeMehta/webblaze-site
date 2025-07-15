import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

const Section_a = () => {
    const navigate=useNavigate()

  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
        <div className="w-[35%]">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2024/11/Group-1171275837-1.png"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-full max-h-[420px] object-cover"
          />
        </div>
        <div className="w-[65%]">
          <h2 className="text-4xl md:text-4xl font-bold leading-snug text-black">
            A <span className="text-red-500">
              Whitelabel </span> App for Pickup and Drop Delivery
          </h2>
          <p className="text-2xl mt-6 text-gray-700 md:text-sm leading-relaxed">
            Webblaze, a leading web development company, is proud to introduce
            Pick Up & Drop, a comprehensive white label solution designed to
            streamline your agency’s workflow and unlock new revenue streams.
            Pick Up & Drop goes beyond traditional white label offerings by
            providing a seamless, end-to-end experience that caters to your
            specific needs and branding.
          </p>
          <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white mt-8 hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section_a;
