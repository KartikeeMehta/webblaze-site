import React from "react";

const benefits = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        stroke="white"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
    ),
    iconBg: "bg-blue-500",
    title: "Accessibility",
    description:
      "With a virtual sanatorium, sufferers can effortlessly agenda online doctor visits and consultations from anywhere, decreasing the want to travel to physical clinics or hospitals.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        stroke="white"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    iconBg: "bg-red-500",
    title: "Convenience",
    description:
      "Virtual doctor appointments and online pressing care services are to be had 24/7, supplying sufferers with the ability to obtain care at their comfort.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        fill="none"
        stroke="white"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8v8" />
      </svg>
    ),
    iconBg: "bg-yellow-400",
    title: "Cost-Effective",
    description:
      "By eliminating the need for bodily infrastructure, digital clinics provide low-priced healthcare answers, such as free on-line physician consultations and digital urgent care visits.",
  },
];

function Section_c() {
  return (
    <div
      className="w-full min-h-[60vh] flex flex-col items-center justify-center py-16"
      style={{
        backgroundImage: "url('/background-lines.webp')", // Replace with your actual background pattern
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundColor: "#181C2E",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Benefits of a Virtual Clinic
      </h2>
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-white bg-opacity-5 rounded-xl border border-white/20 shadow-lg p-8 flex flex-col transition-all duration-300"
            style={{ minHeight: 370 }}
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 ${benefit.iconBg}`}
            >
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">
              {benefit.title}
            </h3>
            <p className="text-base text-white">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section_c;
