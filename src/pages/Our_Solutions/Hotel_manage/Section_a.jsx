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
              "https://webblazesofttech.com/wp-content/uploads/2025/02/travel-again-concept-assortment_11zon-scaled.jpg"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-full max-h-[420px] object-cover"
          />
        </div>
        <div className="w-[65%]">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug text-black">
            Revolutionize Your{" "}
            <span className="text-red-500">
              Hotel Management with Webblaze's{" "}
              <br className="hidden sm:block" />
            </span>
            Cutting-Edge Software
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-sm leading-relaxed">
            Managing a motel efficaciously requires strong hotel control
            software that streamlines operations and complements visitor
            reviews. Webblaze, a renowned web development organization, gives
            brand new motel control software program tailored to fulfill the
            needs of cutting-edge hoteliers. Our comprehensive answer integrates
            seamlessly into your every day operations, offering capabilities
            designed to simplify tasks, increase productiveness, and make
            certain the highest tiers of guest pride.
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
