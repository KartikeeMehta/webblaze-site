import React from 'react';

const Section_a = () => {
  return (
    <section className="bg-[rgba(0,0,0,0.6)] bg-[url('/public/smm_sectionA.jpg')] relative w-full min-h-[400px] flex items-center justify-center py-12">
          {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#000000E0]"
        style={{ backgroundColor: "#000000A0" }}
      ></div>
      <div className='wrap_section_a max-w-[1200px] m-auto relative'>
      <div className="max-w-[1200px] m-auto flex flex-col items-center justify-center text-center">
        <div className="w-full sm:w-[90%] md:w-[80%] bg-opacity-100 p-4 sm:p-6 md:p-8 rounded-xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Unleash the Power of SMM with Webblaze
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white leading-relaxed">
            Welcome to Webblaze, your closing social media advertising business enterprise. In today's digital age, social media management is vital for corporations to thrive and achieve their goals. Our complete SMM offerings, which include Instagram management, Facebook control, and social media post creation, are designed to elevate your brand's online presence and engagement.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Section_a;
