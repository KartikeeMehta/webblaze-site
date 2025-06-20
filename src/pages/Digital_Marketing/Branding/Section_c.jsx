
import React from "react";
import { FaUserAlt, FaPalette, FaGlobe, FaBuilding, FaLayerGroup, FaChartPie, FaCheck, FaFileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaUserAlt className="text-white text-2xl" />,
    title: "Personalized Approach",
    description:
      "We provide a personalized method to creating enterprise logos online. Our design manner involves know-how your enterprise, values, and target audience to create a emblem that actually represents your brand.",
    bg: "bg-blue-500",
  },
  {
    icon: <FaPalette className="text-white text-2xl" />,
    title: "High-Quality Designs",
    description:
      "Our group of skilled designers creates exceptional trademarks for my commercial enterprise that resonate along with your target audience. Whether you want logos for a brand new undertaking or a rebranding attempt, our agency logos on-line are designed to make an impact.",
    bg: "bg-red-500",
  },
  {
    icon: <FaGlobe className="text-white text-2xl" />,
    title: "Versatility",
    description:
      "Our emblems are designed to be versatile and adaptable to exclusive mediums. From websites to social media and print substances, our custom business logos loose provider ensures your brand looks first rate everywhere.",
    bg: "bg-blue-500",
  },
  {
    icon: <FaBuilding className="text-white text-2xl" />,
    title: "Company Logos",
    description:
      "For startups and small agencies, price range constraints can be a mission. That’s why we offer unfastened brand emblems that do not compromise on great. You can download business enterprise emblems at no cost and start the usage of them right away.",
    bg: "bg-red-500",
  },
];

const solutions = [
  {
    icon: <FaLayerGroup className="text-white text-2xl" />,
    title: "Brand Identity Development",
    description:
      "Beyond trademarks, we help broaden a comprehensive brand identification. This consists of color schemes, typography, and different visual elements which can be vital for a cohesive brand picture.",
    bg: "bg-blue-500",
  },
  {
    icon: <FaChartPie className="text-white text-2xl" />,
    title: "Brand Strategy Consultation",
    description:
      "Our branding for online enterprise offerings encompass strategic session. We assist you outline your emblem’s task, vision, and values, making sure that your branding aligns along with your universal commercial enterprise dreams.",
    bg: "bg-blue-500",
  },
  {
    icon: <FaCheck className="text-white text-2xl" />,
    title: "Consistency Across Platforms",
    description:
      "Consistency is fundamental in branding. Our organization makes trademarks additionally guarantees that your logo’s visual factors are consistent across all systems.",
    bg: "bg-red-500",
  },
  {
    icon: <FaFileAlt className="text-white text-2xl" />,
    title: "Brand Guidelines Creation",
    description:
      "We create unique brand pointers that serve as a reference for maintaining consistency in your branding efforts. These suggestions cover trademarks, shades, fonts, and different factors.",
    bg: "bg-blue-500",
  },
];

const Card = ({ icon, title, description, bg }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
    <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${bg} mb-4`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const Section_c = () => {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Our Branding Services</h2>
        <p className="text-lg text-gray-700 mt-2">Custom Logo Design</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {services.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>

      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-900">Comprehensive Branding Solutions</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((solution, index) => (
          <Card key={index} {...solution} />
        ))}
      </div>
    </section>
  );
};

export default Section_c;
