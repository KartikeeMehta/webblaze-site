import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";

function Section_a() {
  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
        <div className="w-[35%]">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2024/11/Group-1171275948-1536x1493.png"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-[567px] h-[450px] object-cover"
          />
        </div>
        <div className="w-[65%]">
          <h2 className="text-3xl md:text-5xl font-bold md:leading-[64px] text-black">
            Your Ultimate
            <span className="text-[#ea5254]">Video and Photo </span>
            Editing Solution
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            At Webblaze, we specialize in providing pinnacle-notch video and
            image modifying offerings designed to fulfill the various wishes of
            our clients. Our professional team utilizes the extremely-current
            tools and techniques to transform raw photos and photos into lovely
            seen content fabric. Whether you are looking for expert video
            publish production or brilliant photo improving offerings, we have
            were given you blanketed.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section_a;
