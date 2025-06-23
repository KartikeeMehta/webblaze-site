import React from 'react';

const Section_b = () => {
  return (
    <div className="bg-white">
      <div
        id="imgtxt"
        className="flex flex-col-reverse md:flex-row items-center gap-10 px-4 sm:px-8 md:px-12 py-12 max-w-[1200px] mx-auto"
      >
        {/* IMAGE */}
        <div id="img" className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-3.webp"
              alt="Graphic Design"
              className="w-full h-auto object-contain rounded-md shadow-md"
            />
          </div>
        </div>

        {/* TEXT */}
        <div id="txtbtn" className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Professional Graphic Design Services
          </h1>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            At Webblaze, we understand that notable photo design is important for making a protracted-lasting impact. Our
            photograph format services embody a massive range of offerings, together with brand design, branding, marketing
            materials, and digital snap shots. We pleasure ourselves on turning in creative solutions that align together
            with your brand’s imaginative and prescient and desires.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_b;
