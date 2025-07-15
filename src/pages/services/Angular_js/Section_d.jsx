import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

function Section_d() {
  const navigate = useNavigate();

  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-stretch gap-10 md:gap-14 lg:gap-20 p-4 md:p-8">
        
        {/* LEFT: TEXT SECTION */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug md:leading-[64px]">
            Our Expertise in Angular.Js
          </h2>
          <p className="mt-4 md:mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            With a group of seasoned Angular.Js developers, Webblaze combines
            technical knowledge with enterprise insights to deliver solutions
            that drive business growth. Whether you need a scalable enterprise
            application or a responsive single-page app, we’re ready to deliver
            outcomes that exceed expectations.
          </p>
          <button
            onClick={() => navigate("/Contact_Us")}
            className="w-fit min-w-[180px] text-center mt-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 transition"
          >
            Contact Us
          </button>
        </div>

        {/* RIGHT: IMAGE SECTION */}
        <div className="w-full md:w-1/2">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/02/side-shot-code-editor-using-react-js_11zon-2048x1365.jpg"
            alt="AngularJS Developer"
            className="w-full max-w-[500px] h-auto md:h-full object-cover rounded-3xl"
          />
        </div>

      </div>
    </div>
  );
}

export default Section_d;
