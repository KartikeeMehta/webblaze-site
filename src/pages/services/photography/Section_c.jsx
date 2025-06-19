import React from "react";

const cardContents = [
  {
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=600&q=80",
    title: "Image Editing Service",
    description:
      "Our image modifying service covers the entirety from easy retouching to advanced photograph manipulations. We use equipment like Adobe Photoshop and Lightroom to beautify your images.",
    border: "border-red-300",
  },
  {
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&w=600&q=80",
    title: "Photo Retouching",
    description:
      "Our picture retouching services consist of colour correction, blemish elimination, and extra to make your photographs appearance ideal.",
    border: "border-blue-300",
  },
  {
    image:
      "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=600&q=80",
    title: "AI Photo Editing",
    description:
      "Leveraging AI generation, we offer quick and efficient photograph editing offerings, making sure extraordinary results whenever.",
    border: "border-yellow-300",
  },
];

function Section_c() {
  return (
    <div className="w-full py-16 md:py-24 bg-[#f7f7f7]">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Advanced Photo Editing Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {cardContents.map((card, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl shadow-md overflow-hidden flex flex-col border-b-4 ${card.border} transition-all duration-300 max-w-sm w-full`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_c;
