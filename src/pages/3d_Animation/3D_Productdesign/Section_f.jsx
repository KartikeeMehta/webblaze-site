import React from "react";

const cardData = [
  {
    title: "3D Product Modeling",
    description:
      "We create unique and correct 3D fashions for various merchandise, such as client items, electronics, and business equipment.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/3-D-Product-Modeling.png",
    borderColor: "border-b-[4px] border-[#ff4d4f]",
  },
  {
    title: "3D Packaging Design",
    description:
      "Our crew designs beautiful and practical packaging that complements the attraction of your products.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/3-d-Packaging-Design.png",
    borderColor: "border-b-[4px] border-[#1890ff]",
  },
  {
    title: "3D Furniture Rendering",
    description:
      "We broaden realistic and specific fashions for fixtures, including office furnishings and home decor gadgets.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/3D-Furniture-Rendering.png",
    borderColor: "border-b-[4px] border-[#fadb14]",
  },
    {
    title: "3D Furniture Rendering",
    description:
      "We broaden realistic and specific fashions for fixtures, including office furnishings and home decor gadgets.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/3D-Prototypes.png",
    borderColor: "border-b-[4px] border-[#fadb14]",
  },
];

const Section_f = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-[#1d1e25]">
         Tailored Solutions for Your Needs
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

export default Section_f;
