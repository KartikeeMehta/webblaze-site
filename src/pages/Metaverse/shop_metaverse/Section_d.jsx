import React from "react";

function Section_d() {
  return (
    <div className="w-full flex justify-center py-16 bg-white">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-10 px-4 mx-auto">
        {/* Left: Circular Image with Yellow Border */}
        <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto">
          <div className="rounded-full border-[6px] border-yellow-300 overflow-hidden w-[490px] h-[490px] flex items-center justify-center bg-black">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2025/01/woman-with-futuristic-device-close-up-2048x1638.jpg" // Replace with your actual image
              alt="Metaverse VR"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* Right: Text */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Choose Metaverse for Ecommerce?
          </h2>
          <p className="text-gray-700 mb-6">
            Incorporating metaverse for ecommerce into your business approach
            can open up new avenues for boom and purchaser engagement. Webblaze
            excels in growing bespoke metaverse ecommerce solutions tailor-made
            for your specific needs. Whether you are trying to build a unique
            metaverse save or an intensive metaverse retail area, our expertise
            ensures your digital presence is impactful and user-friendly.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200">
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section_d;
