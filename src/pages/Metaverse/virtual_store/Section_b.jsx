import React from "react";

const cards = [
  {
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/Virtual-Store-Development.webp",
    title: "Virtual Store Development",
    description:
      "At Webblaze, we specialise in developing virtual stores that shipping your clients right into a 3-d immersive shopping surroundings. A virtual keep website permits clients to navigate all your merchandise as if they have been physically present. This new manner of purchasing not only enhances patron engagement however additionally will increase conversion prices.",
  },
  {
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/VR-Store-Integration.webp",
    title: "VR Store Integration",
    description:
      "Virtual truth shopping is the next big element in retail. Our VR save answers are compatible with famous structures like Oculus, allowing customers to apply gadgets inclusive of the Oculus Quest 2 to browse and purchase merchandise in a fully immersive setting. With the rising popularity of VR headsets, having a VR shop can set your commercial enterprise other than competition.",
  },
  {
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/AR-Store-Features.webp",
    title: "AR Store Features",
    description:
      "Augmented fact purchasing gives an interactive enjoy wherein customers can visualize products in their actual-international surroundings. An AR keep developed via Webblaze can assist customers make better shopping selections, reducing returns and growing satisfaction.",
  },
  {
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/Metaverse-Shopping.webp",
    title: "Metaverse Shopping",
    description:
      "The metaverse is remodeling the manner humans have interaction with digital content material. Webblaze gives metaverse shopping solutions that allow your clients to discover a digital fact store within the metaverse. Metaverse retail isn’t only a fashion but the destiny of e-trade, imparting infinite possibilities for client engagement and emblem constructing.",
  },
];

function Section_b() {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center py-16"
      style={{
        backgroundImage: "url('/background-lines.webp')", // Replace with your actual background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundColor: "#232435",
      }}
    >
      <div className="w-full max-w-[1000px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
          The Future of Shopping:
          <br />
          Virtual Stores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-4 flex flex-col items-center"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold text-center mb-2 text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-700 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_b;
