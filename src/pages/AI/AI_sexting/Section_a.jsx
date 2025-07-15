import React from 'react';

const Section_a = () => {
  return (
    <section className="relative w-full min-h-[700px]">
      <div className="absolute inset-0">
        <img
          src="https://webblazesofttech.com/wp-content/uploads/2025/02/pink-hair-woman-ai-generated-image_11zon-scaled.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 md:px-8">
        <div className="w-full md:w-1/2 lg:w-1/3 ml-auto text-white text-center md:text-right py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-6">
            Elevate Your Business with 
            Webblaze Cutting-Edge 
            Sexting Chat Bot
          </h1>
          <p className="text-base sm:text-lg leading-relaxed">
            Webblaze, a gold standard internet improvement organisation, is pleased to introduce our advanced sexting chat bot offerings. Designed to fulfill the unique needs of the contemporary digital landscape, our chat bots provide seamless and engaging interactions that can drive significant traffic and enhance user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_a;
