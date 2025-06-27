import React from "react";

const cards = [
  {
    icon: "/seoDigitalIcon.png",
    title: "Jewelry 3D Models for Sale",
    description:
      "Explore our giant collection of  rings 3D models for sale. These models are best for jewelers trying to make bigger their services with out the problem of designing from scratch.",
    borderColor: "border-b-[4px] border-[#ff4d4f]",
  },
  {
    icon: "/seoDigitalIcon.png",
    title: "Ring 3D Model",
    description:
      "Our library of  ring 3D models  consists of the whole thing from classic bands to difficult designs. These models are equipped for immediate use for your production process.",
    borderColor: "border-b-[4px] border-[#1890ff]",
  },
  {
    icon: "/seoDigitalIcon.png",
    title: "3D Design for Jewelry",
    description:
      "Our  3D design for rings  services cowl all styles of earrings, including  bracelet 3D designs  and  3D gold bangles . We make certain every layout is useful, lovely, and production-prepared.",
    borderColor: "border-b-[4px] border-[#fadb14]",
  },
];

const Section_h = () => {
  return (
    <div className="bg-[#fafafa] py-20 px-6 md:px-16">
         <div className="max-w-[1200px] mx-auto">

     
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-[#1d1e25]">
        Seamless Integration Across Platforms
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md px-6 py-8 text-left ${card.borderColor}`}
          >
            <div className="flex items-start mb-5">
              <img
                src={card.icon}
                alt={card.title}
                className="w-12 h-12 object-contain"
              />
            </div>
            <h3 className="text-lg font-bold mb-3 text-[#1d1e25]">
              {card.title}
            </h3>
            <p className="text-md text-gray-700 leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
          </div>
    </div>
  );
};

export default Section_h;
