import React from "react";

const CaseStudies = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Case Studies and Success Stories</h1>
      <div className="flex flex-col xl:flex-row gap-6">
        {/* Left Section (Cards) */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Card 1 */}
          <div className="border border-red-300 rounded-lg shadow-md p-6 bg-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-red-500 text-3xl">🤖</div>
              <h2 className="text-red-500 font-bold text-xl">Boost in User Engagement</h2>
            </div>
            <p className="text-gray-700 text-sm">
              A client implemented our sext chatbot and saw a 50% growth in person
              engagement within the first month. The practical conversations and
              interactive functions like sext bot with images stored customers coming again
              for greater.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-blue-300 rounded-lg shadow-md p-6 bg-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-blue-500 text-3xl">👍</div>
              <h2 className="text-blue-500 font-bold text-xl">Improved Customer Satisfaction</h2>
            </div>
            <p className="text-gray-700 text-sm">
              A client implemented our sext chatbot and saw a 50% growth in person
              engagement within the first month. The practical conversations and
              interactive functions like sext bot with images stored customers coming again
              for greater.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-yellow-300 rounded-lg shadow-md p-6 bg-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-yellow-500 text-3xl">💡</div>
              <h2 className="text-yellow-500 font-bold text-xl">Cost Savings</h2>
            </div>
            <p className="text-gray-700 text-sm">
              By changing conventional customer support methods with our sext bot internet site,
              a customer reduced their operational charges by means of 30%. The bot’s potential
              to deal with multiple interactions concurrently improved efficiency and decreased
              the want for added group of workers.
            </p>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/10/image-39.webp"
            alt="AI Chatbot Assistant"
            className="rounded-lg w-full h-full object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
