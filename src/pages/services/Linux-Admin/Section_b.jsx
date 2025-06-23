import React from 'react';

const Section_b = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-3.webp"
              alt="Graphic Design"
              className="w-full h-auto object-contain rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-center md:text-left">
            Why Linux Administration?
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center md:text-left">
            Linux powers a tremendous majority of servers worldwide because of its stability,
            security, and open-source nature. Mastering Linux administration opens doorways to
            profitable career opportunities in IT infrastructure management.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_b;
