import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/word_PressBackImage.png";

function Section_a() {
  const navigate = useNavigate();

  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl">
        {/* Text Section */}
        <div className="w-full lg:w-[60%] text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug lg:leading-[64px]">
            Embrace Scalability and Efficiency with AWS Cloud Solutions
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            At Webblaze, we specialize in empowering organizations with modern
            AWS cloud offerings that redefine scalability, protection, and
            efficiency. Our complete suite of AWS solutions is designed to meet
            numerous commercial enterprise desires, from startups venturing into
            cloud computing to companies in search of sturdy digital
            infrastructures.
          </p>
          <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white mt-6 sm:mt-8 hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-6 sm:px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[40%]">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/02/young-man-engineer-making-program-analyses_11zon-2048x1365.jpg"
            alt="WordPress Developer"
            className="rounded-3xl w-full h-auto max-h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Section_a;
