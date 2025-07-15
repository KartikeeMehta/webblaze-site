import React from "react";
import { useNavigate } from "react-router-dom";

function Section_b() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center py-16 bg-white">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-stretch gap-10 px-4 md:min-h-[450px]">

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/01/medium-shot-woman-experiencing-virtual-reality-2048x1365.jpg"
            alt="Metaverse Shopping"
            className="rounded-2xl border-4 border-blue-500 w-full max-w-[500px] h-full object-cover"
            style={{ background: "#eee" }}
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col   md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            The Future of Shopping:
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#f75c5c] mb-4">
            Metaverse Shopping
          </h3>
          <p className="text-gray-700 mb-6">
            The concept of shopping within the metaverse isn’t only a trend but
            a big shift in how clients interact with brands and products.
            Imagine a seamless blend of physical and virtual worlds where
            customers can browse, try, and purchase products in a fully immersive
            virtual environment. At Webblaze, we specialise in metaverse shopping
            and are dedicated to building sophisticated metaverse retail platforms
            that meet the needs of modern commerce.
          </p>
          <div className="flex  md:justify-start">
            <button
              onClick={() => navigate("/Contact_Us")}
              className="bg-[#1C92FF] hover:bg-white hover:text-[#1C92FF]
              text-white border-2 border-[#1C92FF] font-medium px-8 py-3 rounded-xl
              shadow-md transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_b;
