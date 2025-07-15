import React from 'react';

const Section_b = () => {
  return (
    <div className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">

        {/* LEFT: Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-3.webp"
              alt="Linux Administration Illustration"
              className="w-full h-auto object-contain rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* RIGHT: Text Section */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Why Linux Administration?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            Linux powers a tremendous majority of servers worldwide because of its stability,
            security, and open-source nature. Mastering Linux administration opens doors to
            profitable career opportunities in IT infrastructure management.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Section_b;
