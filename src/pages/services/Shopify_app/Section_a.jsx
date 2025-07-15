import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

function Section_a() {
  const navigate = useNavigate();

  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-20">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug">
            <span className="text-red-500">Shopify App Development</span>
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At Webblaze, we specialize in growing custom designed Shopify apps
            which can remodel your eCommerce commercial enterprise. With our
            understanding in Shopify app improvement, we make certain that your
            store stands out in the competitive market. Whether you need a
            bespoke Shopify POS system, live chat feature, or inventory app —
            we’ve got you covered.
          </p>
          <button
            onClick={() => navigate('/Contact_Us')}
            className="bg-[#1C92FF] hover:bg-white hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium text-md px-6 py-3 rounded-xl shadow-md transition duration-300 w-fit"
          >
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/02/marketing-creative-collage-with-phone_11zon-2048x1638.jpg"
            alt="Shopify App"
            className="w-full max-w-[488px] h-auto object-cover rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Section_a;
