import React, { useState } from "react";

const services = [
  {
    name: "UI/Ux Design",
    color: "bg-blue-100",
    icon: "🖌️",
    summary: "We craft intuitive and beautiful interfaces for your users.",
  },
  {
    name: "Branding",
    color: "bg-red-100",
    icon: "🏷️",
    summary: "Build a memorable brand identity that stands out.",
  },
  {
    name: "E-Commerce",
    color: "bg-yellow-100",
    icon: "🛒",
    summary: "Robust online stores to grow your business.",
  },
  {
    name: "Development",
    color: "bg-yellow-100",
    icon: "💻",
    summary: "Full-stack development for scalable solutions.",
  },
  {
    name: "App Development",
    color: "bg-red-100",
    icon: "📱",
    summary: "Mobile apps for iOS and Android platforms.",
  },
  {
    name: "Digital Marketing",
    color: "bg-red-100",
    icon: "📢",
    summary: "Grow your reach with our digital marketing expertise.",
  },
];

function ServiceCard({ name, color, icon, summary }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-8 transition-transform duration-300 hover:-translate-y-2 cursor-pointer min-h-[240px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card content */}
      <div
        className={`flex flex-col items-center justify-center transition-opacity duration-300 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 text-3xl ${color}`}
        >
          {icon}
        </div>
        <div className="text-xl font-bold text-gray-800 mb-2 text-center">
          {name}
        </div>
      </div>
      {/* Animated overlay summary */}
      <div
        className={`absolute left-0 bottom-0 w-full h-full flex items-center justify-center bg-white rounded-2xl shadow-lg text-gray-700 text-center px-6 py-8 transition-all duration-500 ease-in-out
          ${
            hovered
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-full opacity-0 pointer-events-none"
          }
        `}
        style={{ zIndex: 10 }}
      >
        <div className="text-lg font-semibold">{summary}</div>
      </div>
    </div>
  );
}

function Section_c() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-8">
        <div className="text-red-400 font-medium mb-2">Services</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          What’s Brewing In The Webblaze Softtech?
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Discover the digital possibilities for your brand with our
          comprehensive suite of services.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Section_c;
