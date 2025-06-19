import React from "react";
import bgImage from "../../assets/word_PressBackImage.png";

function Section_b() {
  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
        <div className="w-[50%]">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2025/02/data-center-with-server-racks-corridor-room-3d-render-digital-data-cloud-technology_11zon-2048x1365.jpg"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-[567px] h-[450px] object-cover"
          />
        </div>
        <div className="w-[50%]">
          <h2 className="text-3xl md:text-5xl font-bold md:leading-[64px] text-black">
            AWS: Unleashing Power and Flexibility
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Amazon Web Services (AWS) stands because the cornerstone of
            modern-day cloud computing, offering an extensive range of offerings
            tailored to optimize performance and streamline operations. From the
            intuitive AWS Management Console to powerful tools like Amazon EC2
            and AWS S3, each aspect of AWS is crafted to decorate your digital
            capabilities.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section_b;
