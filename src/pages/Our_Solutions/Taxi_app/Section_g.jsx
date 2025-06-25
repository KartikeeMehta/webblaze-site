import React from 'react';

const Section_g = () => {
  return (
    <div className="bg-[#0E1325] text-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Enhance Driver and Passenger Safety
          </h2>
          <p className="text-gray-300 mb-8">
            Safety is a pinnacle precedence for any taxi provider. Our app consists of sturdy safety
            functions to protect every drivers and passengers, ensuring a sincere corporation.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-white">Safety Features</h3>

          <ul className="space-y-6">
            <li>
              <h4 className="text-red-500 text-lg font-semibold">Emergency Button</h4>
              <p className="text-gray-300 text-sm">
                Allow customers to short contact emergency services or a trusted contact.
              </p>
            </li>
            <li>
              <h4 className="text-blue-500 text-lg font-semibold">Ride Sharing Detail</h4>
              <p className="text-gray-300 text-sm">
                Share journey facts with friends or family for added protection.
              </p>
            </li>
            <li>
              <h4 className="text-yellow-400 text-lg font-semibold">Driver Verification</h4>
              <p className="text-gray-300 text-sm">
                Implement thorough cause force history checks and verification strategies.
              </p>
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/10/Group-1171275776-1219x1536.webp" // Replace with actual path
            alt="Safety Features UI"
            className="max-w-[90%] md:max-w-[80%] lg:max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_g;
