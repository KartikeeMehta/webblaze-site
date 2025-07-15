import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/word_PressBackImage.png";

const Section_a = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-left-top bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 md:gap-12">

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] leading-tight font-bold mb-6 text-black">
              Welcome to Webblaze:
              <span className="text-red-500">
                <br className="hidden lg:block" />
                Your Virtual Store Development
              </span>{" "}
              <span className="text-black">Partner</span>
            </h1>

            <p className="text-gray-600 text-[16px] leading-[1.9] mb-8">
              Webblaze, an internet development organization, is at the leading
              edge of revolutionizing the buying experience with our modern-day
              digital shop solutions. Whether you’re looking to create an
              immersive VR store, AR store, or a full metaverse shopping
              platform, we’ve got the expertise to bring your vision to life.
              Our digital stores are crafted for seamless, engaging user journeys
              that boost your online presence and drive sales.
            </p>

            <div className="flex justify-center lg:justify-start">
              <button
                onClick={() => navigate("/Contact_Us")}
                className="w-full sm:w-auto md:w-[200px] bg-[#1C92FF] hover:bg-white hover:text-[#1C92FF]
                text-white border-2 border-[#1C92FF] font-medium px-8 py-3 
                rounded-xl shadow-md transition duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2025/02/futuristic-casino-architecture-2048x2048.jpg"
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
