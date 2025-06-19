import React from "react";
import bgImage from "../../assets/word_PressBackImage.png";

function Section_d() {
  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
        <div className="w-[50%]">
          <h2 className="text-3xl md:text-5xl font-bold md:leading-[64px] text-black">
            Our Expertise in Angular.Js
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            With a group of seasoned Angular.Js developers, Webblaze combines
            technical knowledge with enterprise insights to supply solutions
            that power business increase. Whether you need a scalable company
            software or a responsive single-page utility, we’re geared up to
            deliver consequences that exceed expectations.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        <div className="w-[50%]">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2025/02/side-shot-code-editor-using-react-js_11zon-2048x1365.jpg"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-full h-[450px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Section_d;
