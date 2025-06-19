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
            <span className="text-red-500">Shopify App Development</span>
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            At Webblaze, we specialize in growing custom designed Shopify apps
            which can remodel your eCommerce commercial enterprise. With our
            understanding in Shopify app improvement, we make certain that your
            save stands proud in the competitive market. Whether you need a
            bespoke Shopify POS gadget, a fascinating Shopify stay chat
            function, or an green Shopify stock management app, we have you ever
            blanketed.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        <div className="w-[35%]">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2025/02/marketing-creative-collage-with-phone_11zon-2048x1638.jpg"
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
