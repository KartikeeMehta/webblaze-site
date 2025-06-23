import React from "react";

const Section_e = () => {
  return (
    // Full-width black background
    <div className="bg-[#0D1128] text-white py-16 px-4 w-full">
      
      {/* Inner content with max width and centered */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Freelance Smart Contract Developers
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            We offer get right of access to to pinnacle freelance smart settlement developers on your specific mission needs.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you want a blockchain smart agreement developer or a solidity smart agreement developer, we’ve have been given you protected.
          </p>
        </div>

        {/* Right image */}
        <div className="md:w-1/2">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/Freelance-Smart-Contract-Developers.webp"
            alt="Smart Contract Developers"
            className="rounded-2xl border-4 border-blue-500"
          />
        </div>

      </div>
    </div>
  );
};

export default Section_e;
