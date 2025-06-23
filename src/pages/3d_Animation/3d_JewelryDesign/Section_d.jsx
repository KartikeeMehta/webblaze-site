import React from "react";

const cardData = [
  {
    title: "Best CAD for Jewelry Design",
    description:
      "Utilizing the first-rate CAD software, which include  Rhino rings layout  and  ZBrush jewelry design , we create particular and correct fashions. This generation allows us to supply exceptional  3D jewelry CAD  designs which can be equipped for production.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Best-CAD-for-Jewelry-design.webp",
    borderColor: "border-b-[4px] border-[#ff4d4f]",
  },
  {
    title: "3D Jewelry Design Online",
    description:
      "Access our pinnacle-notch  3D rings layout online  services from anywhere inside the international. Our platform lets in you to collaborate with our designers and see your thoughts come to existence in real-time.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/3d-Jewelry-design-online.webp",
    borderColor: "border-b-[4px] border-[#1890ff]",
  },
  {
    title: "3D Rendering Jewelry",
    description:
      "Our  3D rendering earrings  services offer photorealistic pics of your designs, assisting you visualize the final product before it’s made. This is especially beneficial for advertising and purchaser displays.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/3d-rendering-Jewelry.webp",
    borderColor: "border-b-[4px] border-[#fadb14]",
  },
];

const Section_d = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-[#1d1e25]">
          The Future of Digital Interaction
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

export default Section_d;
