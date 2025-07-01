import React from "react";

const Section_e = () => {
  return (
    <section className="bg-[#f8f9fb] py-16 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="relative w-full max-w-md mx-auto rounded-[50px] border-l-[6px] border-yellow-300 border-r-[6px] border-blue-500 overflow-hidden">
          <img
            src={'https://webblazesofttech.com/wp-content/uploads/2025/01/Group-1171275937.png'}
            alt="CEO"
            className="object-cover w-full h-auto rounded-[50px]"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1.5 w-10 bg-red-500 rounded-md mt-2" />
        </div>

        <div className="text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Words from <span className="text-red-500">Our</span>{" "}
            <span className="text-blue-500">CEO</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            At Webblaze, we believe in the power of innovation and collaboration.
            Since 2014, our goal has been to help businesses unlock their true
            potential by leveraging the latest technologies. Our team is
            dedicated to delivering excellence and ensuring our clients achieve
            their desired outcomes. Together, we can shape the future of your
            business.
          </p>
          <p className="font-semibold text-gray-900 mb-6">
            – Mr. Rajender Kashyap, CEO of Webblaze
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section_e;
