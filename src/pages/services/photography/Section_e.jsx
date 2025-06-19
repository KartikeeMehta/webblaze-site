import React from "react";

const cardContents = [
  {
    title: "Expert Team",
    description:
      "Our team of professional editors is professional within the utilization of the fashionable software application and techniques to deliver top-excellent enhancing services.",
    topBg: "bg-red-100",
    border: "border-red-200",
  },
  {
    title: "Customization",
    description:
      "We provide tailored enhancing solutions to meet your precise goals, whether or not it’s far for video post production or photograph modifying provider.",
    topBg: "bg-blue-100",
    border: "border-blue-200",
  },
  {
    title: "Quality Assurance",
    description:
      "We ensure that each project we undertake meets the very first-rate requirements of exceptional and precision.",
    topBg: "bg-yellow-100",
    border: "border-yellow-200",
  },
  {
    title: "Affordable Pricing",
    description:
      "Our services are inexpensive, ensuring you get the brilliant cost for your funding.",
    topBg: "bg-blue-100",
    border: "border-blue-200",
  },
];

function Section_e() {
  return (
    <div className="w-full py-16 md:py-24 bg-[#fafbfc]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Why Choose Webblaze?
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {cardContents.slice(0, 3).map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border-b-2 ${card.border} transition-all duration-300 max-w-sm w-full`}
            >
              <div className={`rounded-t-2xl px-6 py-3 ${card.topBg}`}>
                <h3 className="text-lg font-bold text-gray-900">
                  {card.title}
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-700 text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-start-2">
            <div
              className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border-b-2 ${cardContents[3].border} transition-all duration-300 max-w-sm w-full`}
            >
              <div
                className={`rounded-t-2xl px-6 py-3 ${cardContents[3].topBg}`}
              >
                <h3 className="text-lg font-bold text-gray-900">
                  {cardContents[3].title}
                </h3>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-gray-700 text-base">
                  {cardContents[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_e;
