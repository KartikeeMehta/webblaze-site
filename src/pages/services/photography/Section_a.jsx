import React from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../../../assets/word_PressBackImage.png";

function Section_a() {
  const navigate = useNavigate();

  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-10 rounded-3xl">

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/11/Group-1171275948-1536x1493.png"
            alt="Video and Photo Editing"
            className="rounded-3xl w-full max-w-md max-h-[450px] object-cover"
          />
        </div>

        {/* TEXT CONTENT */}
        <div className="w-full md:w-1/2 space-y-6 text-left">
          <h2 className="text-3xl md:text-5xl font-bold md:leading-[64px] text-black">
            Your Ultimate{" "}
            <span className="text-[#ea5254]">Video and Photo </span>
            Editing Solution
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-8">
            At Webblaze, we specialize in providing top-notch video and image editing services designed to meet the diverse needs of our clients. Our expert team uses the latest tools and techniques to transform raw video and photos into stunning visual content. Whether you're seeking professional post-production or high-quality photo enhancements, we’ve got you covered.
          </p>
          <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section_a;
