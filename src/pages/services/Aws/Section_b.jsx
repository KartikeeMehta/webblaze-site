import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";

function Section_b() {
  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl">
        
        {/* Image Section */}
        <div className="w-full lg:w-[50%]">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/02/data-center-with-server-racks-corridor-room-3d-render-digital-data-cloud-technology_11zon-2048x1365.jpg"
            alt="AWS Cloud"
            className="rounded-3xl w-full max-h-[450px] object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[50%] text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug lg:leading-[64px] text-black">
            AWS: Unleashing Power and Flexibility
          </h2>
          <p className="mt-4 sm:mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            Amazon Web Services (AWS) stands because the cornerstone of
            modern-day cloud computing, offering an extensive range of offerings
            tailored to optimize performance and streamline operations. From the
            intuitive AWS Management Console to powerful tools like Amazon EC2
            and AWS S3, each aspect of AWS is crafted to enhance your digital
            capabilities.
          </p>
          <button className="mt-6 sm:mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section_b;
