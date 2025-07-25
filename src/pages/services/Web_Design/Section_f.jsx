import React from "react";
import visualDesignIcon from "../../../assets/visualDesignIcon.png";
import mainTencesIcon from "../../../assets/mainTencesIcon.png";
import clickIcon from "../../../assets/clickIcon.png";
import EcomerceIcon from "../../../assets/EcomerceIcon.png";
import searchEngineIcon from "../../../assets/searchEngineIcon.png";

const services = [
  {
    title: "Visual Design",
    description:
      "Creating an aesthetically fascinating format that aligns together with your brand.",
    icon: 'WebD_10.png',
    color: "bg-blue-500",
  },
  {
    title: "User Experience (UX) Design",
    description:
      "Ensuring the internet site is straightforward to navigate and character-friendly.",
    icon: 'WebD_11.png',
    color: "bg-red-500",
  },
  {
    title: "Content Management Systems (CMS)",
    description:
      "Implementing CMS solutions like WordPress, Joomla, or custom-constructed structures.",
    icon: 'WebD_14.png',
    color: "bg-yellow-400",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Developing strong e-change systems with strong rate gateways.",
    icon: 'WebD_13.png',
    color: "bg-yellow-400",
  },
  {
    title: "Search engine advertising-Friendly Design",
    description:
      "Although we do not explicitly factor out it, our designs are dependent to carry out nicely in are looking for engine rankings.",
    icon: 'WebD_14.png',
    color: "bg-red-500",
  },
  {
    title: "Ongoing Support and Maintenance",
    description:
      "Providing continuous useful resource to preserve your internet web site updated and jogging smoothly.",
    icon: 'WebD_15.png',
    color: "bg-blue-500",
  },
];

const Section_f = () => {
  return (
    <div className="min-h-screen bg-[#1b1e2f] bg-[url('background-lines.webp')] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Professional Web Design Services
        </h2>
        <p className="text-gray-100 mb-12 max-w-2xl mx-auto">
          Our professional internet layout services cover the whole thing from preliminary concept to very last launch. We manage all additives of internet design, together with
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className=" border border-gray-700 rounded-xl p-6 opacity- hover:shadow-xl transition-all"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-2xl mb-4 ${service.color}`}
              >
                <img src={service.icon} />
              </div>
              <h3 className="text-2xl text-left font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-100 text-left text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_f;
