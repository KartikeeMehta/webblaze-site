import React from "react";
import { useNavigate } from "react-router-dom";

const Section_h = () => {
  const navigate = useNavigate()

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Stay Ahead with Webblaze</h1>
      <div className="flex flex-col xl:flex-row gap-10">
        <div className="flex flex-col gap-6 flex-1 ">
          <div className="border border-red-300 rounded-lg shadow-md p-6 bg-white">

            <p className="text-gray-700 text-lg">
              With the rapid advancements in AI era and the increasing demand for actual-time, personalized information, now’s the appropriate time to combine AI information anchors into your operations. Webblaze’s AI information anchor service offers a strong, fee-effective, and progressive solution that continues your audience informed and engaged with the latest in AI information, artificial intelligence articles, and updates on new AI era.
            </p>
          </div>

          <div className="border border-blue-300 rounded-lg shadow-md p-10 bg-white">
            <p className="text-gray-700 text-lg">
              By selecting Webblaze, you’re no longer best embracing the destiny of news delivery but also making sure that your organisation remains at the reducing edge of technological innovation. Contact us these days to analyze more approximately our AI information anchor provider and how we let you revolutionize your information delivery.
            </p>
          </div>

          <div className="">
            <button
              onClick={() => navigate("/Contact_Us")}
              className="bg-[#1C92FF] hover:bg-white mt-8 hover:text-[#1C92FF] 
             text-white border-2 border-[#1C92FF] hover:border-[#1C92FF] 
             font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 h-[580px]">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/09/remember-why-you-started.webp"
            alt="AI Chatbot Assistant"
            className="rounded-lg w-full h-full object-cover  shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_h;
