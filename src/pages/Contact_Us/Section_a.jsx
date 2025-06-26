
import React from "react";

const Section_a = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://webblazesofttech.com/wp-content/uploads/2024/07/contact-banner-1.webp')" }} 
    >
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl font-bold">Contact Us</h1>
      </div>
    </div>
  );
};

export default Section_a;
