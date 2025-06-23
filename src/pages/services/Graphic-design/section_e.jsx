import React, { useState } from "react";

const services = [
  {
    name: "Logo Design",
    color: "bg-blue-100",
    icon: "🖌️",
    summary:
      "Your logo is the face of your brand. Our talented designers create unique, high-quality logos that reflect your brand’s identity and values.",
  },
  {
    name: "Branding",
    color: "bg-red-100",
    icon: "🏷️",
    summary:
      "We build cohesive brand identities—logos, colors, typography, and more—to give your business a consistent and powerful presence.",
  },
  {
    name: "Marketing Materials",
    color: "bg-yellow-100",
    icon: "🛒",
    summary:
      "From brochures to posters, we design eye-catching marketing collateral that’s aligned with your brand’s identity.",
  },
  {
    name: "Digital Graphics",
    color: "bg-yellow-100",
    icon: "💻",
    summary:
      "We create stunning digital visuals—social media graphics, web banners, email templates—to build your online presence.",
  },
];

function ServiceCard({ name, color, icon, summary }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-8 transition-transform duration-300 hover:-translate-y-2 cursor-pointer min-h-[240px] w-full sm:w-[48%] lg:w-[30%]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card Icon & Title */}
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

      {/* Hover Summary */}
      <div
        className={`absolute left-0 bottom-0 w-full h-full flex items-center justify-center bg-white rounded-2xl shadow-lg text-gray-700 text-center px-6 py-8 transition-all duration-500 ease-in-out ${
          hovered
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 10 }}
      >
        <div className="text-lg font-semibold">{summary}</div>
      </div>
    </div>
  );
}

function Section_e() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12 px-4">
        <div className="text-red-400 font-medium mb-2">Services</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Comprehensive Graphic Design Offerings
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Discover the digital possibilities for your brand with our
          comprehensive suite of services.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto flex flex-wrap justify-center gap-8 px-4">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Section_e;
