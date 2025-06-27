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
           <span className="text-red-500"> Angular.Js Development </span>Services through Webblaze: Empowering Your Web Projects
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Angular.Js, a powerful JavaScript framework, has revolutionized net development with its strong features and flexibility. At Webblaze, we focus on harnessing the total capability of Angular.Js to create dynamic and scalable net packages that meet the evolving needs of modern-day organizations.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        <div className="w-[35%]">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2025/02/rear-view-programmer-working-all-night-long_11zon-1-2048x1367.jpg"
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
