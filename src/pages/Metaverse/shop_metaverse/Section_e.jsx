import React from "react";

const features = [
  {
    text: "Customizable Metaverse Shops : Design a metaverse keep that displays your brand’s identity with tailor-made virtual spaces.",
  },
  {
    text: "Enhanced User Interaction : Create dynamic virtual environments where customers can engage with merchandise in a simulated 3D area.",
  },
  {
    text: "Advanced Shopping Tools : Equip your metaverse retail stores with modern-day tools that enhance the shopping experience, inclusive of virtual strive-ons and actual-time customer support.",
  },
  {
    text: "Seamless Integration : Integrate your metaverse shopping platform with present ecommerce systems for a easy transition among virtual and physical retail.",
  },
];

function Section_e() {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center py-16"
      style={{
        background: "#181C2E",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
        Key Features of Our Metaverse Retail Solutions
      </h2>
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-10 px-4 mx-auto">
        {/* Left: Image */}
        <div className="flex-shrink-0 flex justify-center items-center w-full md:w-auto">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/Metaverse-Retail-1.webp" // Replace with your actual image
            alt="Metaverse Retail"
            className="rounded-2xl border-l-4 border-b-4 border-[#f75c5c] max-w-md w-full object-cover"
            style={{ minWidth: 320, minHeight: 320, background: "#eee" }}
          />
        </div>
        {/* Right: Features */}
        <div className="flex-1 flex flex-col gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="text-white border border-white rounded-xl px-6 py-5 text-base md:text-lg"
            >
              {feature.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_e;
