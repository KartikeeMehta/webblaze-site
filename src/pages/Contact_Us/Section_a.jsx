import React from "react";

const Section_a = () => {
  return (
    <div
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://webblazesofttech.com/wp-content/uploads/2024/07/contact-banner-1.webp')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Centered Heading */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-snug">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default Section_a;
