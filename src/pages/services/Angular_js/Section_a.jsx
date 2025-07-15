import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

function Section_a() {
  const navigate = useNavigate();

  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-stretch gap-10 md:gap-14 lg:gap-20 p-4 md:p-8">
        
        {/* LEFT: TEXT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug lg:leading-[64px]">
            <span className="text-red-500">Angular.Js Development</span> Services through Webblaze: Empowering Your Web Projects
          </h2>
          <p className="mt-4 md:mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Angular.Js, a powerful JavaScript framework, has revolutionized net development with its strong features and flexibility. At Webblaze, we focus on harnessing the full capability of Angular.Js to create dynamic and scalable applications that meet the evolving needs of modern businesses.
          </p>
          <button
            onClick={() => navigate("/Contact_Us")}
            className="w-fit min-w-[180px] text-center bg-[#1C92FF] hover:bg-white mt-6 md:mt-8 hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
        </div>

        {/* RIGHT: IMAGE SECTION */}
        <div className="w-full md:w-1/2">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/02/rear-view-programmer-working-all-night-long_11zon-1-2048x1367.jpg"
            alt="AngularJS Developer"
            className="w-full h-full max-h-[520px] md:max-h-none object-cover rounded-3xl"
          />
        </div>

      </div>
    </div>
  );
}

export default Section_a;
