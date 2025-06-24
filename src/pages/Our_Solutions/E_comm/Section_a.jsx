import React from 'react';

function Section_a() {
  return (
    <div className="bg-white">
      <div
        id="txtbtnimg"
        className="flex flex-col-reverse md:flex-row items-center gap-10 px-4 sm:px-8 md:px-12 py-12 max-w-[1200px] mx-auto"
      >
        <div className=''></div>
        {/* TEXT + BUTTON */}
        <div id="txtbtn" className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            <span className='text-red-500'> E-commerce Solutions</span> by using Webblaze: Transforming Your Online Business
          </h1>
          <p className='text-3xl font-bold'>Unlock the Power of E-trade Development</p>
          <p className="text-gray-600 text-base sm:text-lg lg:text-lg leading-relaxed">
            At Webblaze, we cognizance on offering top-notch e-trade improvement offerings tailor-made to fulfill the various wishes of businesses. Our group of skilled ecommerce builders is dedicated to building ecommerce websites which are strong, scalable, and person-friendly. Whether you’re looking to create a easy on-line maintain or a complicated e-alternate platform, Webblaze has the information to supply great effects.
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
              src="https://webblazesofttech.com/wp-content/uploads/2024/11/E-commerce-Solutions-by-using-Webblaze-Transforming-Your-Online-Business.webp"
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
