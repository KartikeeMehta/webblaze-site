import React from "react";
import { useNavigate } from "react-router-dom";

const Section_e = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f8f9fb] py-16 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left: Image */}
        <div className="relative w-full max-w-sm sm:max-w-md mx-auto rounded-[40px] overflow-hidden">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/01/Group-1171275937.png"
            alt="CEO"
            className="w-full h-auto object-cover rounded-[40px]"
          />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 h-1.5 w-10 bg-red-500 rounded-md" />
        </div>

        {/* Right: Content */}
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Words from <span className="text-red-500">Our</span>{" "}
            <span className="text-blue-500">CEO</span>
          </h2>

          <p className="text-gray-700 text-base leading-relaxed mb-6">
            At Webblaze, we believe in the power of innovation and collaboration.
            Since 2014, our goal has been to help businesses unlock their true
            potential by leveraging the latest technologies. Our team is
            dedicated to delivering excellence and ensuring our clients achieve
            their desired outcomes. Together, we can shape the future of your
            business.
          </p>

          <p className="font-semibold text-gray-900 mb-6">
            – Mr. Rajender Kashyap, CEO of Webblaze
          </p>

          <button
            onClick={() => navigate('/Contact_Us')}
            className="bg-blue-500 text-white border-2 border-blue-500 hover:bg-white hover:text-blue-500 px-6 py-2 rounded-lg transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section_e;
