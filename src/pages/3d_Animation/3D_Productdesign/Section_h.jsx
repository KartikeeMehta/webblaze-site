import React from "react";

const cardData = [
  {
    title: "Consumer Electronics",
    description:
      "Designed a 3D model for the iPhone 14 Pro Max, the use of Fusion 360 for 3D printing and SolidWorks Premium for unique modeling.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Consumer-Electronics.png",
    borderColor: "border-b-[4px] border-[#ff4d4f]",
  },
  {
    title: "Furniture Design",
    description:
      "Created a 3D rendering of a dining table using SketchUp Furniture Design and Autodesk Fusion 360.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Furniture-Design-1.webp",
    borderColor: "border-b-[4px] border-[#1890ff]",
  },
  {
    title: "Industrial Equipment",
    description:
      "Developed a 3D prototype for a brand new industrial device using AutoCAD Mechanical 3D and SolidWorks Electrical 3D.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/09/Industrial-Equipment.webp",
    borderColor: "border-b-[4px] border-[#fadb14]",
  },
    
];

const Section_h = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto px-5">
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
                <h3 className="text-xl font-bold mb-3 text-[#1d1e25]">
                  {card.title}
                </h3>
                <p className="text-md text-gray-700 leading-relaxed">
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

export default Section_h;
