import React from "react";

const Section_g = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-16">
          Our Process
        </h2>

        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-20">
          <div className="md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold text-[#F75C4E] mb-4">
              Initial Consultation
            </h3>
            <h4 className="text-lg md:text-xl font-semibold text-[#1A1A1A] mb-3">
              Understanding Your Needs
            </h4>
            <div className="pl-4 border-l border-gray-300 space-y-2 text-[#333]">
              <p>• We start with an intensive consultation to apprehend your business wishes and dreams.</p>
              <p>• Our smart settlement development organization ensures that we tailor our solutions to suit your requirements.</p>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Initial-Consultation.webp" 
              alt="Consultation"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-start justify-between gap-10">
          <div className="md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold text-[#F75C4E] mb-4">
              Development and Testing
            </h3>

            <div className="mb-10">
              <h4 className="text-lg md:text-xl font-semibold text-[#1A1A1A] mb-3">
                Creating Smart Contracts
              </h4>
              <div className="pl-4 border-l border-gray-300 space-y-2 text-[#333]">
                <p>• Our blockchain smart agreement developers use extraordinary practices to create stable and green smart contracts.</p>
                <p>• We use rigorous trying out techniques to ensure the reliability and safety of our smart contracts.</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-semibold text-[#1A1A1A] mb-3">
                Deployment and Maintenance
              </h4>
              <div className="pl-4 border-l border-gray-300 space-y-2 text-[#333]">
                <p>• Once advanced, we installation your smart contracts at the blockchain of your preference.</p>
                <p>• Our team gives ongoing maintenance and assist to make certain your smart contracts preserve to perform optimally.</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Development-and-Testing.webp" 
              alt="Development and Testing"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_g;
