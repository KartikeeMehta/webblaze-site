import React from "react";

const cardContents = [
  {
    title: "Quest 2 Buy and Oculus Quest Buy",
    description:
      "Our digital shops assist Quest 2 buy, Oculus Quest buy, and other popular buy alternatives, ensuring customers can without difficulty g and purchase their preferred products. This includes features like Oculus Quest purchase now pay later and Meta Quest 2 buy now pay later.",
    headingBg: "bg-blue-100",
    headingText: "text-black-800",
  },
  {
    title: "Cross-Platform Compatibility",
    description:
      "Webblaze virtual stores are well suited with various VR and AR platforms, along with Oculus, Meta Quest, HTC Vive, and greater. This ensures a constant and immersive buying enjoy across one of a kind devices and structures.",
    headingBg: "bg-red-100",
    headingText: "textblack-800",
  },
  {
    title: "Best Buy Options",
    description:
      "We provide integration with Best Buy for a streamlined shopping experience. This consists of Best Buy Meta Quest, Best Buy Oculus accessories, and more. Customers can explore the Best Buy digital truth segment and make purchases seamlessly.",
    headingBg: "bg-yellow-100",
    headingText: "text-black-800",
  },
];

function Section_e() {
  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Seamless Integration and Flexibility
        </h2>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardContents.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg border-b-2 border-blue-300 flex flex-col transition-all duration-300"
            >
              <div className={`rounded-t-lg px-4 py-3 ${card.headingBg}`}>
                <span className={`text-lg font-bold ${card.headingText}`}>
                  {card.title}
                </span>
              </div>
              <div className="p-6">
                <p className="text-gray-700">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_e;
