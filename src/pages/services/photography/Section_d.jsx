import React from "react";

const tools = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968522.png",
    title: "Adobe Premiere Pro",
    description:
      "Known for its sturdy capabilities, Adobe Premiere Pro is our cross-to software program for video editing, allowing us to create expert-grade films.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
    title: "Filmora",
    description:
      "Ideal for each novices and professionals, Filmora offers a user-friendly interface with powerful modifying competencies.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968706.png",
    title: "Sony Vegas Pro",
    description:
      "This software program offers advanced video enhancing functions, perfect for developing top notch movies.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968707.png",
    title: "Movavi Video Editor",
    description:
      "A versatile device that permits us to edit movies with no trouble, ensuring tremendous output.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
    title: "Adobe Photoshop",
    description:
      "Our number one device for picture improving, Adobe Photoshop lets in us to perform intricate edits and upgrades.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968521.png",
    title: "Lightroom",
    description:
      "Used for photograph retouching and coloration correction, Lightroom helps us reap professional photo improving effects.",
  },
];

function Section_d() {
  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Tools and Software We Use
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white rounded-2xl shadow-md p-6 transition-all duration-300"
              style={{ minHeight: "120px" }}
            >
              <img
                src={tool.icon}
                alt={tool.title}
                className="w-14 h-14 rounded-lg object-contain mr-5"
                loading="lazy"
              />
              <div>
                <h3 className="text-lg font-semibold mb-1 text-[#f25c5c]">
                  {tool.title}
                </h3>
                <p className="text-gray-700 text-base">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_d;
