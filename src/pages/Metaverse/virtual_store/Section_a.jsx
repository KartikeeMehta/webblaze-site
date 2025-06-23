import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";

const Section_a = () => {
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
              Welcome to Webblaze:
              <span className="text-red-500">
                Your <br /> Virtual Store Development
              </span>{" "}
              <span className="text-black">Partner</span>
            </h1>

            <p className="text-gray-600 text-[17px] leading-[1.9] mb-8">
              Webblaze, an internet development organization, is at the leading
              edge of revolutionizing the buying revel in with our modern-day
              digital shop solutions. Whether you’re looking to create an
              immersive VR save, an AR store, or a complete metaverse shopping
              platform, we’ve got the understanding to make your vision a truth.
              Our digital shops are designed to offer a unbroken and tasty
              purchasing experience, boosting your on line presence and driving
              income.
            </p>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition duration-300">
              Contact Us
            </button>
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
