import React from "react";

const features = [
  {
    title: "Comprehensive Carpool Services",
    bgColor: "bg-[#e6f0ff]",
    borderColor: "border-b-[#4da6ff]",
    items: [
      "Our automobile pooling apps are tailored to provide seamless carpool offerings, whether for daily commutes or intercity tour.",
      "With our consumer-friendly carpool platform, finding a carpool near you is just a few taps away.",
      "Webblaze’s answers include features like carpool rideshare, company carpooling, and carpool transportation offerings.",
    ],
  },
  {
    title: "Advanced Carpool Software",
    bgColor: "bg-[#ffe6e6]",
    borderColor: "border-b-[#4da6ff]",
    items: [
      "Our carpool software program is designed to guide various carpool offerings close to you, making sure a smooth and green person experience.",
      "The carpool system integrates features like carpool experience booking, carpool organizer equipment, and carpool sign-up methods.",
    ],
  },
  {
    title: "Customized Carpooling Solutions",
    bgColor: "bg-[#fff9d6]",
    borderColor: "border-b-[#4da6ff]",
    items: [
      "Whether you’re searching out a volvo car pool or an uber car pool, our apps for vehicle pooling cater to diverse alternatives and desires.",
      "Our carpooling solutions guide car pooling, carpool car offerings, and even specialised offerings like ski vehicle pool and quick experience carpool.",
    ],
  },
  {
    title: "Seamless User Experience",
    bgColor: "bg-[#e6f0ff]",
    borderColor: "border-b-[#4da6ff]",
    items: [
      "Our carpool platform gives an intuitive interface for easy navigation and utilization.",
      "Features like carpool select up, carpool skip, and carpool signal-up make it simple for customers to join and manage carpool rides.",
    ],
  },
  {
    title: "Flexible Carpool Options",
    bgColor: "bg-[#fff9d6]",
    borderColor: "border-b-[#4da6ff]",
    items: [
      "Our carpooling offerings consist of alternatives for both short and long distance carpool rides, accommodating all journey desires.",
      "Webblaze’s carpool apps near you assist carpooling among towns, interstate car pooling, and day by day vehicle pooling.",
    ],
  },
];

const Section_b = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-[1200px] mx-auto text-center px-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10 px-10">
          Why Choose Webblaze for Your Car Pooling App?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl shadow-md border-b-4 ${feature.borderColor} p-6 bg-white h-[320px] flex flex-col justify-start`}
            >
              <div
                className={`rounded-md px-4 py-2 mb-4 w-fit font-semibold text-gray-800 text-left ${feature.bgColor}`}
              >
                {feature.title}
              </div>
              <ul className="text-sm text-gray-700 text-left list-decimal list-inside space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_b;
