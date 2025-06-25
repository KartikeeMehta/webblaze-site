import React from "react";
import sectionImage from "/public/section_a_bg.png";

const Section_a = () => {
  return (
    <section className="bg-white py-0 px-6 sm:px-10 lg:px-16 overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-4">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            <span className="text-red-500">UI and UX Development</span>
          </h2>
          <h3 className="text-xl sm:text-1xl md:text-3xl font-semibold text-gray-800 mb-4">
            Services through way of Webblaze
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            At Webblaze, a renowned internet development corporation, we provide
            incredible UI and UX improvement offerings that cater to agencies
            aiming to decorate their virtual presence. Our expertise spans a
            wide range of character-centric designs that not only captivate but
            convert. By blending creativity with capability, we make certain
            that your digital platforms offer a first-rate consumer experience.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-2 rounded-md shadow-md transition duration-300">
            Contact Us
          </button>
        </div>

        <div className="flex-1 flex justify-center items-center relative">
          <img
            src={sectionImage}
            alt="UI UX Phone Design"
            className="max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_a;
