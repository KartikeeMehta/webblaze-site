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
        <div className="w-[65%]">
          <h2 className="text-3xl md:text-5xl font-bold md:leading-[64px] text-black">
            Embrace Scalability and Efficiency with AWS Cloud Solutions
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            At Webblaze, we specialize in empowering organizations with modern
            AWS cloud offerings that redefine scalability, protection, and
            efficiency. Our complete suite of AWS solutions is designed to meet
            numerous commercial enterprise desires, from startups venturing into
            cloud computing to companies in search of sturdy digital
            infrastructures.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        <div className="w-[35%]">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2025/02/young-man-engineer-making-program-analyses_11zon-2048x1365.jpg"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-[488px] h-[520px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Section_a;
