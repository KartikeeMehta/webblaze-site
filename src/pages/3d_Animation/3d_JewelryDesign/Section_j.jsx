

import React from "react";

const cardData = [
  {
    title: "Rhino 3D Jewelry",
    description:
      "We leverage the electricity of  Rhino 3D for jewelry design  to create detailed and precise fashions. This software program is right for producing wonderful  Rhino jewelry  models.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Rhino-3d-Jewelry.webp",
    borderColor: "border-b-[4px] border-[#ff4d4f]",
  },
  {
    title: "ZBrush for Jewelry Design",
    description:
      "With  ZBrush for earrings , we are able to sculpt tricky details and textures, ensuring your earrings designs are clearly one-of-a-type.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/zbrush-for-Jewelry.webp",
    borderColor: "border-b-[4px] border-[#1890ff]",
  },
  {
    title: "Thunk 3D Jewelry Scanner",
    description:
      " Our  Thunk 3D jewelry scanner  generation allows us to seize and replicate current rings designs with precision. This is perfect for creating virtual information or modifying existing pieces.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Thunk-3-d-Jewelry-Scanner.webp",
    borderColor: "border-b-[4px] border-[#fadb14]",
  },
];

const Section_j = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-[#1d1e25]">
          Cutting-Edge Technology and Tools
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-xl overflow-hidden ${card.borderColor} transition-all duration-300`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold mb-3 text-[#1d1e25]">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_j;
