import React from "react";

const Section_g = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        Future of AI in News
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div
          className="rounded-xl p-8 text-white bg-cover bg-center flex flex-col justify-center"
          style={{
            backgroundImage: "url('https://webblazesofttech.com/wp-content/uploads/2024/09/Emerging-Technologies.webp')",
            minHeight: "300px",
            backgroundColor: "rgba(0,0,0,0.4)",
            backgroundBlendMode: "multiply"
          }}
        >
          <h3 className="text-2xl font-bold mb-4">Emerging Technologies</h3>
          <p className="text-white text-sm">
            As AI era keeps to adapt, so does the capacity for AI news anchors.
            The integration of recent AI technology in 2023 and beyond will most
            effective beautify their talents, making them a quintessential tool
            for news delivery.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="rounded-xl p-8 text-white bg-cover bg-center flex flex-col justify-center"
          style={{
            backgroundImage: "url('https://webblazesofttech.com/wp-content/uploads/2024/09/Expanding-Horizons.webp')",
            minHeight: "300px",
            backgroundColor: "rgba(0,0,0,0.4)",
            backgroundBlendMode: "multiply"
          }}
        >
          <h3 className="text-2xl font-bold mb-4">Expanding Horizons</h3>
          <p className="text-white text-sm">
            The destiny of AI news anchors includes broader applications and
            more state-of-the-art interactions, making them key gamers in
            turning in news and facts across diverse sectors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_g;
