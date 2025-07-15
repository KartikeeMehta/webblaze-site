import React from 'react';
import watchGroup from "../../assets/watchGroup.png";
import groupGd from "../../assets/groupGd.png";

const features = [
  {
    title: "Expertise",
    description: "A team of seasoned professionals with years of experience in diverse industries.",
    icon: "/Proven_Result.png",
  },
  {
    title: "Innovation",
    description: "Cutting-edge solutions that keep you ahead in a competitive market.",
    icon: "/Innovation_About.png",
  },
  {
    title: "Customization",
    description: "Tailored strategies and solutions designed to meet your specific needs.",
    icon: "/CustomizationIcon.png",
  },
  {
    title: "Customer-Centric",
    description: "A commitment to delivering exceptional customer service and support.",
    icon: "/CustomizationIcon.png",
  },
  {
    title: "Results-Driven",
    description: "Proven track record of delivering measurable outcomes that align with your business goals.",
    icon: "/CustomizationIcon.png",
  },
];

const Section_c = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <p className="text-red-500 font-semibold mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
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
                className="flex items-start gap-4 p-4 rounded-xl shadow-sm border border-gray-100"
              >
                <img
                  src={feature.icon}
                  className="h-14 w-14 object-contain shrink-0"
                  alt={feature.title}
                />
                <div>
                  <h4 className="text-lg font-semibold text-red-500">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-16 items-center">
          {/* Image 1 */}
          <div className="relative w-full flex justify-center">
            <img
              src={watchGroup}
              alt="Fist Bump"
              className="w-[260px] md:w-[280px] h-[360px] object-cover rounded-[100px] border-l-[6px] border-yellow-400"
            />
            {/* Tag 1 */}
            <div className="absolute -top-6 right-0 sm:right-[-100px] bg-white shadow-lg rounded-md flex items-center h-[50px] w-[220px] p-0.5">
              <span className="bg-red-500 text-white font-bold px-2 py-1 text-sm rounded mr-3 flex items-center h-[100%]">5k+</span>
              <span className="text-gray-800 text-sm">Awesome Clients</span>
            </div>
            {/* Tag 2 */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-white shadow-lg rounded-md flex items-center h-[50px] w-[220px] p-0.5">
              <span className="bg-red-500 text-white font-bold rounded-lg py-2 text-sm mr-3 h-full px-4 flex items-center justify-center">12+</span>
              <span className="text-gray-800 text-sm">Years in Business</span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="relative w-full flex justify-center">
            <img
              src={groupGd}
              alt="Team Meeting"
              className="w-[260px] md:w-[280px] h-[360px] object-cover rounded-[100px] border-r-[6px] border-red-500"
            />
            {/* Tag 3 */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 bg-white shadow-lg rounded-md flex items-center h-[50px] w-[220px] p-0.5">
              <span className="bg-red-500 text-white font-bold rounded-lg py-2 text-sm mr-3 h-full px-4 flex items-center justify-center">500+</span>
              <span className="text-gray-800 text-sm">Successful Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_c;
