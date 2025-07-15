import React from 'react';
import { useNavigate } from 'react-router-dom';

function Section_a() {
  const navigate = useNavigate()
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
            Elevate Your<span className='text-red-500'> Car Hire </span> Company
          </h1>
          <p className="text-gray-600 text-base sm:text-lg lg:text-lg leading-relaxed">
            Webblaze, a leading net development employer, brings you comprehensive vehicle rental app development solutions. With the rise in demand for convenient automobile lease services, our expert crew is right here to help automobile condominium organizations optimize their automobile apartment carrier offerings. Our car condo app development offerings are designed to boost your enterprise, enhance patron pleasure, and streamline your operations.
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
              src="https://webblazesofttech.com/wp-content/uploads/2024/10/Group-1171275779@2x.png"
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
