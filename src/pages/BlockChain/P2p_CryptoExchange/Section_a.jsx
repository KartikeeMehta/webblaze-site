import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

const Section_a = () => {
  const navigate = useNavigate();

  return (
    <div
      className="py-12 md:py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row  justify-between gap-10  backdrop-blur-md rounded-3xl p-6 sm:p-10 ">
          <div className="flex-1 sm:text-left lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-black">
              Develop Your <span className="text-red-500">Crypto Exchange</span> with Webblaze
            </h2>
            <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
              In the ever-evolving crypto market, the demand for sturdy crypto exchange development offerings has skyrocketed. At Webblaze, a premier web development company, we specialize in building top-notch cryptocurrency exchange platforms tailored to meet the dynamic needs of the digital asset exchange industry. Whether you’re aiming to build a modern trading platform or a user-friendly crypto app, our expert team is here to turn your vision into reality.
            </p>
            <button
              onClick={() => navigate("/Contact_Us")}
              className="mt-6 sm:mt-8 bg-[#1C92FF] hover:bg-white hover:text-[#1C92FF] text-white border-2 border-[#1C92FF] px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl shadow-md transition duration-300"
            >
              Contact Us
            </button>
          </div>

          <div className="flex-1 w-full">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2025/02/woman-s-hand-giving-bitcoin-coin-another-woman_3_11zon-scaled.jpg"
              alt="Crypto Exchange"
              className="rounded-tr-lg w-full h-64 sm:h-80 md:h-96 object-cover"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section_a;
