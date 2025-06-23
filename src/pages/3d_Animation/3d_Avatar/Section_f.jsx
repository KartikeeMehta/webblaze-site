import React from "react";

const cardData = [
  {
    title: "Metaverse Integration",
    description:
      "As the metaverse continues to adapt, Webblaze gives metaverse avatar advent offerings, which include metaverse avatar NFTs and metaverse 3D avatars. Our solutions enable you to create and control avatars that seamlessly combine into diverse metaverse platforms.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Business-and-personal-use.webp",
    borderColor: "border-b-[4px] border-[#ff4d4f]",
  },
  {
    title: "Comprehensive Support",
    description:
      "At Webblaze, we offer complete aid at some point of the avatar introduction procedure. From preliminary layout to final implementation, our group is dedicated to ensuring your 3D avatar meets your expectations and enhances your virtual interactions.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Comprehensive-support.webp",
    borderColor: "border-b-[4px] border-[#1890ff]",
  },
  {
    title: "Innovation and Technology",
    description:
      "At Webblaze, we offer complete aid at some point of the avatar introduction procedure. From preliminary layout to final implementation, our group is dedicated to ensuring your 3D avatar meets your expectations and enhances your virtual interactions.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Innovation-and-technology.webp",
    borderColor: "border-b-[4px] border-[#fadb14]",
  },
];

const Section_f = () => {
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

export default Section_f;
