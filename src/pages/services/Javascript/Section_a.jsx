import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";

const Section_a = () => {
  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
        <div className="w-[65%]">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Webblaze - Your Ultimate 
            <span className="text-red-500"> JavaScript Development </span>
          partner</h1>
         
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Welcome to Webblaze, a leading web development company specializing
            in top-tier JavaScript services. Our expertise spans across
            JavaScript, Node.js, and various related technologies, enabling us
            to deliver comprehensive solutions tailored to meet your unique
            business needs.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        <div className="w-[35%]">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2024/08/php-development-banner.webp"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-[488px] h-[520px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_a;
