import React from "react";
import bgImage from "../../assets/word_PressBackImage.png";

function Section_b() {
  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
        <div className="w-[50%]">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2025/02/coding-man_11zon-2048x1367.jpg"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-[567px] h-[450px] object-cover"
          />
        </div>
        <div className="w-[50%]">
          <h2 className="text-3xl md:text-5xl font-bold md:leading-[64px] text-black">
            PHP Development Services via Webblaze
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Welcome to Webblaze, your most efficient internet development
            enterprise that specialize in PHP development offerings. With our
            sizeable information in PHP, we deliver top-notch solutions tailored
            to satisfy your commercial enterprise wishes. Whether you’re
            searching out a PHP developer, Laravel developer, or a crew talented
            in diverse PHP frameworks, Webblaze is here to deliver your
            imaginative and prescient to lifestyles.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section_b;
