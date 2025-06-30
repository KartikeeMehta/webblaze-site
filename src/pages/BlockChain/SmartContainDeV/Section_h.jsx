import React from "react";

const Section_h = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F75C4E] mb-16">
          Our Team
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-20">
          <div className="md:w-1/2">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/experienced-developers.webp" 
              alt="Experienced Developers"
              className="w-full h-auto rounded-[50px] shadow-lg"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-xl md:text-3xl font-semibold text-[#1A1A1A] mb-3">
              Experienced Developers
            </h3>
            <p className="text-lg text-[#333] mb-2">
              Our crew includes some of the nice smart agreement developers within the enterprise.
            </p>
            <p className="text-lg text-[#333]">
              We have know-how in solidity development, blockchain smart agreement improvement, and more.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-10">
          <div className="md:w-1/2">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Certified-Professionals.webp" 
              alt="Certified Professionals"
              className="w-full h-auto rounded-[80px_80px_0px_0px] border-2 border-[#F75C4E] shadow-lg"
            />
          </div>

          <div className="md:w-1/2">
            <h3 className="text-xl md:text-3xl font-semibold text-[#1A1A1A] mb-3">
              Certified Professionals
            </h3>
            <p className="text-lg text-[#333] mb-2">
              Our licensed smart settlement developers convey a wealth of understanding and experience to each undertaking.
            </p>
            <p className="text-lg text-[#333]">
              We make sure that our answers meet the very exceptional requirements of protection and universal performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_h;
