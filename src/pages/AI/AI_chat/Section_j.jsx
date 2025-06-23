import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Section_j = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-10">Conclusion</h2>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
          {/* Image */}
          <div className="w-full md:w-1/3">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/Conclusion.png" // replace with actual image
              alt="Chatbot"
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3 text-left">
            <FaQuoteLeft className="text-3xl text-blue-500 mb-4" />
            <p className="text-gray-800 leading-relaxed text-lg">
              Incorporating an AI chatbot into your industrial organization method can notably
              decorate customer engagement, streamline operations, and offer a aggressive area. At
              Webblaze, we are devoted to handing over pinnacle-notch AI chatbot improvement
              services to assist your commercial enterprise thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_j;
