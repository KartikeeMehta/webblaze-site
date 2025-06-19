import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";

function Section_a() {
  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
        <div className="w-[65%]">
          <h2 className="text-3xl md:text-5xl font-bold md:leading-[64px] text-black">
            <span className="text-red-500">Shopify Development Services</span>
            <br />
            with the aid of Webblaze: Elevate Your e commerce Experience
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Webblaze, a leading net improvement employer, offers pinnacle-notch
            Shopify development offerings tailored to fulfill your e commerce
            desires. As a sturdy and flexible platform, Shopify empowers
            corporations of all sizes to create an engaging online purchasing
            enjoy. Our professional developers at Webblaze focus on building
            custom Shopify websites, ensuring they may be visually attractive,
            fairly purposeful, and optimized for overall performance
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        <div className="w-[35%]">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2024/08/shopify-development.webp"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-[488px] h-[520px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Section_a;
