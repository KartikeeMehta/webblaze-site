import React from 'react';
import { useNavigate } from 'react-router-dom';

function Section_a() {
    const navigate=useNavigate()

  return (
    <div className="bg-white">
      <div
        id="txtbtnimg"
        className="flex flex-col-reverse md:flex-row items-center gap-10 px-4 sm:px-8 md:px-12 py-12 max-w-[1200px] mx-auto "
      >
        <div className=''></div>
        {/* TEXT + BUTTON */}
        <div id="txtbtn" className="w-full md:w-1/2 space-y-6 text-center md:text-left min-h-[495]">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Revolutionize Your Healthcare with Webblaze's <span className='text-red-500'>Hospital Management Software</span>
          </h1>
          <p className='font-bold text-2xl'>
            Why Choose Webblaze’s Hospital Management Software?
          </p>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            Webblaze, a most effective web development organisation, is proud to provide our brand new health center control software program. This comprehensive solution is designed to streamline sanatorium operations, beautify patient care, and increase performance. Our health facility control system (HMS) integrates all crucial medical institution functions into one platform, making sure seamless operation and stepped forward effects.
          </p>

          <div id="btn">
             <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white mt-8 hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
          </div>
        </div>

        {/* IMAGE */}
        <div id="img" className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/10/Group-1171275442-1.png"
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
