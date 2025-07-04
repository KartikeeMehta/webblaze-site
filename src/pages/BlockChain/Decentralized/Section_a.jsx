import React from 'react';

const Section_a = () => {
  return (
    <section
      className="w-full min-h-[400px] bg-cover bg-center flex items-center justify-center px-4 py-16"
      style={{
        backgroundImage:
          "url('https://webblazesofttech.com/wp-content/uploads/2025/02/Flux_Dev_Create_a_sweeping_panoramic_image_featuring_a_futuris_1-1.jpeg')",
      }}
    >
      <div className="text-center max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Decentralized App <span className="text-red-500">Development Services</span> at Webblaze
        </h1>
      </div>
    </section>
  );
};

export default Section_a;
  