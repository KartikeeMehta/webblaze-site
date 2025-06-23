import React from 'react';

function Section_a() {
  return (
    <div className="bg-white">
      <div
        id="txtbtnimg"
        className="flex flex-col-reverse md:flex-row items-center gap-10 px-4 sm:px-8 md:px-12 py-12 max-w-[1200px] mx-auto"
      >
        {/* TEXT + BUTTON */}
        <div id="txtbtn" className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            <span className="text-red-500">Graphic Design Services</span> via the usage of Webblaze: Elevate Your Visual Presence
          </h1>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            Welcome to Webblaze, a top-rated web development company renowned for delivering top-notch graphic design services.
            Our team of expert graphic designers is dedicated to creating visually stunning designs that captivate audiences and elevate brands. Whether you're a startup seeking to establish a visual identity or an established business looking for a fresh look, our graphic design services are tailored to meet your unique needs.
          </p>

          <div id="btn">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md transition duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div id="img" className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Graphic-Design-Services-via-the-usage-of-Webblaze_-Elevate-Your-Visual-Presence.webp"
              alt="Graphic Design"
              className="w-full h-auto object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_a;
