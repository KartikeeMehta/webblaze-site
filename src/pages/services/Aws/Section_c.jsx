import React from "react";

const cardContents = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png",
    title: "Scalability",
    description:
      "AWS EC2 lets in you to scale your assets seamlessly, accommodating fluctuating demands without difficulty.",
    bg: "bg-blue-100",
    iconBg: "bg-blue-400",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048952.png",
    title: "Storage Solutions",
    description:
      "AWS S3 affords steady, dependable storage, ensuring your statistics is always available and protected.",
    bg: "bg-red-100",
    iconBg: "bg-red-400",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048960.png",
    title: "Cost-Effectiveness",
    description:
      "With flexible pricing models and pay-as-you-pass options, AWS helps you optimize fees without compromising overall performance.",
    bg: "bg-yellow-100",
    iconBg: "bg-yellow-300",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1048/1048961.png",
    title: "Security",
    description:
      "Built-in safety capabilities and compliance certifications, which includes AWS ISO 27001, assure the highest tiers of data safety.",
    bg: "bg-yellow-100",
    iconBg: "bg-yellow-300",
  },
];

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

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardContents.slice(0, 3).map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-6 border-b-4 border-blue-400 flex flex-col transition-all duration-300"
            >
              <div
                className={`flex items-center mb-4 rounded-lg px-4 py-3 ${card.bg}`}
              >
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${card.iconBg} mr-3`}
                >
                  <img src={card.icon} alt={card.title} className="w-6 h-6" />
                </span>
                <span className="text-lg font-bold text-gray-800">
                  {card.title}
                </span>
              </div>
              <p className="text-gray-600 px-1">{card.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-start-2">
            <div className="bg-white rounded-xl shadow p-6 border-b-4 border-blue-400 flex flex-col transition-all duration-300">
              <div
                className={`flex items-center mb-4 rounded-lg px-4 py-3 ${cardContents[3].bg}`}
              >
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full ${cardContents[3].iconBg} mr-3`}
                >
                  <img
                    src={cardContents[3].icon}
                    alt={cardContents[3].title}
                    className="w-6 h-6"
                  />
                </span>
                <span className="text-lg font-bold text-gray-800">
                  {cardContents[3].title}
                </span>
              </div>
              <p className="text-gray-600 px-1">
                {cardContents[3].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_c;
