import React, { useState } from "react";

const services = [
  {
    name: "Logo Design",
    color: "bg-blue-100",
    icon: "🖌️",
    summary: "Your logo is the face of your logo. Our talented image designers create unique and extremely good trademarks that mirror your brand’s identity and values. Whether you want a brand new logo or a brand remodel, we’ve have been given you covered.",
  },
  {
    name: "Branding",
    color: "bg-red-100",
    icon: "🏷️",
    summary: "Branding goes beyond best a emblem. Our image format offerings encompass growing a cohesive brand identity that encompasses logo layout, color schemes, typography, and more. We assist you set up a sturdy and normal logo presence across all systems.",
  },
  {
    name: "Marketing Materials",
    color: "bg-yellow-100",
    icon: "🛒",
    summary: "From brochures and flyers to business organization gambling playing cards and posters, our picture format crew can create desirable advertising materials that effectively speak your message. We make certain that your marketing and advertising collateral is visually attractive and aligned together with your brand’s identification.",
  },
  {
    name: "Digital Graphics",
    color: "bg-yellow-100",
    icon: "💻",
    summary: "In nowadays’s digital age, having captivating digital pictures is essential. Our offerings embody designing lovely social media graphics, website banners, e mail templates, and more. We help you create a sturdy on line presence that engages your target market.",
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
          Comprehensive Graphic Design Offerings
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
