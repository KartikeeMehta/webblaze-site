import React, { useState } from 'react'

const services = [
  {
    name: "Expertise in Web Design and Development",
    color: "bg-blue-100",
    icon: "🖌️",
    summary: "Our group consists of quite skilled specialists with years of revel in in internet site designing. We live up to date with the brand new net layout developments and generation to supply modern-day answers",
  },
  {
    name: "Tailored Solutions",
    color: "bg-red-100",
    icon: "🏷️",
    summary: "Build a memorable brand identity that stands out.",
  },
  {
    name: "User-Centric Approach",
    color: "bg-yellow-100",
    icon: "🛒",
    summary: "Robust online stores to grow your business.",
  },
  {
    name: "Affordable Pricing",
    color: "bg-yellow-100",
    icon: "💻",
    summary: "Full-stack development for scalable solutions.",
  },
];

function ServiceCard({ name, color, icon, summary }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center border border-gray-600  rounded-2xl shadow-md p-8 transition-transform duration-300 hover:-translate-y-2 cursor-pointer min-h-[240px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`flex flex-col items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"
          }`}>
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 text-3xl ${color}`}
        >
          {icon}
        </div>
        <div className="text-xl font-bold text-white mb-2 text-center">
          {name}
        </div>
      </div>
      <div
        className={`absolute left-0 bottom-0 w-full h-full border   border-color#1C92FF flex items-center justify-center bg-white rounded-2xl shadow-lg text-gray-700 text-center px-6 py-8 transition-all duration-500 ease-in-out
          ${hovered
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
const Section_c = () => {

  return (
    <section
      className="bg-[#1b1e2f]  text-white py-20 px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
          Why Choose Webblaze for Web Design?
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-[18px] font-normal">
          Choosing the right net format business enterprise may be a frightening task. Here’s why Webblaze stands proud</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </section>
  )
}

export default Section_c;