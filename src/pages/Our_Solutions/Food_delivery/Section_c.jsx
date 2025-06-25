import React from "react";

const Section_c = () => {
  const cards = [
    {
      title: "Food Delivery Application Development",
      text: "Our whole meals transport application improvement offerings cowl the whole thing from preliminary idea to final deployment. We assemble apps which can be intuitive, clean to navigate, and loaded with capabilities that hold users engaged.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/image-51-1024x520.webp",
    },
    {
      title: "Grocery Delivery App Development",
      text: "In addition to meals delivery apps, we additionally concentrate on grocery shipping app development. Our group can create a grocery delivery app that makes online shopping for a breeze in your clients. Whether it’s a simple grocery app or a complex answer, we supply top-notch services.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/image-52-1024x517.webp",
    },
    {
      title: "On-Demand Food Delivery Apps",
      text: "We excel in on-name for food shipping app improvement. Our apps are designed to deal with high site visitors and offer a seamless enjoy for clients. From order placement to move tracking, we cowl all factors to make certain your clients are happy.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/image-53-1024x515.webp",
    },
  ];

  const fourthCard = {
    title: "Restaurant Delivery App Development",
    text: "Our eating place transport app development services are perfect for agencies looking to increase their acquire. We expand apps that combine seamlessly with restaurant operations, making sure smooth and efficient carrier.",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/10/image-54-1024x520.webp",
  };

  return (
    <div className="bg-[#181C2E] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover bg-center w-full px-4 py-12">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        {/* Row 1: 3 cards */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md flex-1 min-w-[280px] max-w-[370px]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: 4th card + image */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Left: 4th Card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full">
              <img
                src={fourthCard.image}
                alt={fourthCard.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{fourthCard.title}</h3>
                <p className="text-gray-700 text-sm">{fourthCard.text}</p>
              </div>
            </div>
          </div>

          {/* Right: Main Illustration */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/10/image-3065.png" // replace with actual image path
              alt="Delivery Illustration"
              className="rounded-2xl shadow-md w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_c;
