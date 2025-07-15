import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

const Section_a = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full bg-white overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-left-top bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12">
          <div className="w-full lg:w-1/2">
            <h1 className="text-[42px] sm:text-[46px] lg:text-[48px] leading-tight font-bold mb-6 text-black">
              <span className="text-red-500">Web Design</span>{" "}
              <span className="text-red-500">Services</span> by using Webblaze

            </h1>

            <p className="text-gray-600 text-[17px] leading-[1.9] mb-8">
              Welcome to Webblaze, your maximum green internet improvement
              agency offering top-notch net layout offerings tailored to fulfill
              your particular needs.
              Whether you’re looking for a entire internet site overhaul or a
              present day website from scratch, our group of expert designers
              and developers is right here that will help you create a stunning
              online presence.
            </p>


             <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white mt-8 hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/webdesigning.webp"
              alt="Web Design"
              className="max-w-[520px] w-full object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_a;
