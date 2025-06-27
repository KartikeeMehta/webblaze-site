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
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug text-red-500">
            Node.Js Development <span className="text-black">Services: Empowering Your Digital Future</span>
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            In the realm of present day net and application improvement, Node.Js stands tall as a flexible and powerful framework. At Webblaze, we concentrate on harnessing the entire capacity of Node.Js to craft contemporary solutions that power your enterprise forward.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        <div className="flex-1">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2025/02/mature-computer-programmer-programming-coding-new-technologies-while-typing-laptop-table-office_11zon-scaled.jpg"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-full max-h-[420px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_a;
