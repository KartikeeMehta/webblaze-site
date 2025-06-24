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
            Enhance Learning with Webblaze's <span className='text-red-500'>Learning Management Software</span>
          </h1>
          <p className='font-bold text-2xl'>
            Streamline Education and Training with Advanced LMS Solutions
          </p>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            Webblaze, a leading internet development business enterprise, is proud to introduce its contemporary Learning Management Software (LMS). Our software is designed to fulfill the various wishes of instructional institutions, groups, and non-earnings. Whether you’re seeking out LMS systems for schooling, schooling control software program, or company studying management systems, Webblaze has the suitable solution tailored to your wishes.
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
              src="https://webblazesofttech.com/wp-content/uploads/2024/10/Enhance-Learning-with-Webblazes-Learning-Management-Software.webp"
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
