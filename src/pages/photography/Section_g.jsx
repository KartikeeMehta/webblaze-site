import React from "react";

const cardContents = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    title: "Video Post Production",
    description:
      "From reducing and trimming to which includes outcomes and transitions, our video submit production services make certain your videos are polished and professional.",
    border: "border-red-400",
    iconColor: "text-red-400",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921826.png",
    title: "Image Editing Service",
    description:
      "We provide comprehensive picture enhancing offerings, along with records removal, color correction, and additional.",
    border: "border-blue-400",
    iconColor: "text-blue-400",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
    title: "Adobe Photoshop Tutorial",
    description:
      "For those trying to beautify their private improving competencies, we offer certain Adobe Photoshop tutorials.",
    border: "border-yellow-400",
    iconColor: "text-yellow-400",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
    title: "Free Video Editor Consultation",
    description:
      "We provide loose consultations that will help you pick the awesome video modifying software and services for your dreams.",
    border: "border-red-400",
    iconColor: "text-red-400",
  },
];

function Section_g() {
  return (
    <div className="w-full py-16 md:py-24 bg-[#fafbfc]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Our Services in Detail
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {/* First row: 3 cards */}
          {cardContents.slice(0, 3).map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded shadow-md overflow-hidden flex flex-col border-b-4 ${card.border} transition-all duration-300 max-w-sm w-full`}
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-2">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className={`w-12 h-12 mb-2 ${card.iconColor}`}
                    style={{
                      filter: card.iconColor
                        ? "brightness(0) saturate(100%)"
                        : undefined,
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 flex items-center">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Second row: 1 card centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-start-1"></div>
          <div className="md:col-start-2">
            <div
              className={`bg-white rounded shadow-md overflow-hidden flex flex-col border-b-4 ${cardContents[3].border} transition-all duration-300 max-w-sm w-full`}
            >
              <div className="p-6 flex flex-col flex-1">
                <div className="mb-2">
                  <img
                    src={cardContents[3].icon}
                    alt={cardContents[3].title}
                    className={`w-12 h-12 mb-2 ${cardContents[3].iconColor}`}
                    style={{
                      filter: cardContents[3].iconColor
                        ? "brightness(0) saturate(100%)"
                        : undefined,
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 flex items-center">
                  {cardContents[3].title}
                </h3>
                <p className="text-gray-700 text-base">
                  {cardContents[3].description}
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-start-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Section_g;
