import React from 'react';
import watchGroup from "../../assets/watchGroup.png";
import groupGd from "../../assets/groupGd.png";

const features = [
  {
    title: "Expertise",
    description: "A team of seasoned professionals with years of experience in diverse industries.",
    icon: "/Proven_Result.png",
    bg: "bg-blue-50",
  },
  {
    title: "Innovation",
    description: "Cutting-edge solutions that keep you ahead in a competitive market.",
    icon: "/Innovation_About.png",
    bg: "bg-red-50",
  },
  {
    title: "Customization",
    description: "Tailored strategies and solutions designed to meet your specific needs.",
    icon: "/Customization_About.png",
    bg: "bg-yellow-100",
  },
  {
    title: "Customer-Centric",
    description: "A commitment to delivering exceptional customer service and support.",
    icon: "/Customization_About.png",
    bg: "bg-yellow-100",
  },
  {
    title: "Results-Driven",
    description: "Proven track record of delivering measurable outcomes that align with your business goals.",
    icon: "/Customization_About.png",
    bg: "bg-yellow-100",
  },
];

const Section_c = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-red-500 font-semibold mb-2">Why Choose Us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Experience the Advantage Why We're the Right Choice
          </h2>
          <p className="text-gray-600 mb-8">
            At Webblaze we understand that you have many options when it comes to digital
            marketing services. So why should you choose us? Here are a few reasons:
          </p>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start bg-white gap-4 p-4 rounded-xl shadow-sm border`}
              >
                <img src={feature.icon} className="h-16 w-16 object-contain"></img>
                <div>
                  <h4 className="text-lg font-semibold text-red-500">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-24 relative">
          <div className="relative">
            <img
              src={watchGroup}
              alt="Fist Bump"
              className="w-[280px] h-[360px] object-cover rounded-[100px] border-l-[6px] border-yellow-400"
            />
            <div className="absolute -top-6 -right-36 flex items-center bg-white shadow-lg px-4 py-2 rounded-full">
              <span className="bg-red-500 text-white font-bold px-3 py-1 rounded mr-2">5k+</span>
              <span className="text-gray-800 text-sm">Awesome Clients</span>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-white shadow-lg px-4 py-2 rounded-full flex items-center">
              <span className="bg-red-500 text-white font-bold px-3 py-1 rounded mr-2">12+</span>
              <span className="text-gray-800 text-sm">Years in Business</span>
            </div>
          </div>

          <div className="relative">
            <img
              src={groupGd}
              alt="Team Meeting"
              className="w-[280px] h-[360px] object-cover rounded-[100px] border-r-[6px] border-red-500"
            />
            <div className="absolute -bottom-6 -left-28 flex items-center bg-white shadow-lg px-4 py-2 rounded-full">
              <span className="bg-red-500 text-white font-bold px-3 py-1 rounded mr-2">500+</span>
              <span className="text-gray-800 text-sm">Created Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_c;
