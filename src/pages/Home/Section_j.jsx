import React from 'react';
import girlPhone from '../../assets/girlPhone.png';

const Section_j = () => {
  return (
    <section className="bg-[#F2F3F2] py-20 px-4 flex justify-center">
      <div className="max-w-7xl w-full bg-white rounded-xl overflow-hidden flex flex-col md:flex-row items-stretch shadow-lg">
        
        {/* Left Section */}
        <div className="relative bg-[#11182B] text-white p-10 md:p-20 md:w-1/2 w-full flex flex-col justify-center rounded-md md:rounded-r-none h-full">
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#2B3145] rounded-full opacity-30 z-0 -translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#2B3145] rounded-full opacity-30 z-0 translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold leading-relaxed mb-6">
              Start your <br />
              entrepreneurial journey <br />
              with WebBlaze today!
            </h2>
            <button className="bg-[#1DA1F2] hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-200">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full h-full">
          <img
            src={girlPhone}
            alt="Woman on phone"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_j;
