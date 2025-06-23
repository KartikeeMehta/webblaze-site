import React from "react";

const Section_f = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F75C4E] mb-10">
            Specialized Development
          </h2>

          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-4">
              MLM Smart Contract Development
            </h3>
            <div className="pl-4 border-l border-gray-300 space-y-2 text-[#333333]">
              <p>• Our multi stage advertising platform with smart agreement solutions ensures stable and transparent multi-diploma advertising operations.</p>
              <p>• We increase MLM smart contracts which might be tamper-evidence and efficient.</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-[#1A1A1A] mb-4">
              Cross-Platform Development
            </h3>
            <div className="pl-4 border-l border-gray-300 space-y-2 text-[#333333]">
              <p>• We increase smart contracts for diverse systems, which consist of Ethereum, Binance Smart Chain, and Polygon.</p>
              <p>• Our offerings encompass rust smart contracts, python smart contracts, and greater.</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="relative">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Specialized-Development.webp" 
              className="rounded-[100px_100px_100px_100px] border-2 border-[#F75C4E] shadow-lg"
            />

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_f;
