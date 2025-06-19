import React from "react";

const cardContent = {
  icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
  title: "Scalability",
  description:
    "AWS EC2 lets in you to scale your assets seamlessly, accommodating fluctuating demands without difficulty.",
  bg: "bg-blue-100",
  iconBg: "bg-blue-400",
  border: "border-b-2 border-blue-400",
};

function Section_c() {
  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">
          Why Choose AWS Cloud Services?
        </h2>
        <p className="text-center text-gray-500 mb-12">
          AWS is famend for its capability to deliver exceptional advantages:
        </p>

        {/* Single Card */}
        <div className="flex justify-center">
          <div
            className={`rounded-xl shadow-md p-6 ${cardContent.bg} ${cardContent.border} transition-all duration-300 flex flex-col max-w-sm w-full`}
          >
            <div className={`flex items-center mb-4`}>
              <span
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${cardContent.iconBg} mr-3`}
              >
                <img
                  src={cardContent.icon}
                  alt={cardContent.title}
                  className="w-7 h-7"
                />
              </span>
              <span className="text-lg font-bold text-gray-800">
                {cardContent.title}
              </span>
            </div>
            <p className="text-gray-600">{cardContent.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_c;
