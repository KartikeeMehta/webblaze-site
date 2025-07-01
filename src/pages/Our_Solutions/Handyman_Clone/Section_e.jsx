import React from "react";
import { FaCogs, FaUsers, FaHandsHelping, FaChartLine, FaLightbulb } from "react-icons/fa";

const features = [
  {
    icon: <img src='/public/Handy_6.png'/>,
    title: "Customization",
    border: "border-red-200",
    points: [
      "Tailor the software to suit your unique business requirements.",
      "Integrate capabilities relevant to your services, such as handyman deck repair near me and handyman flooring.",
    ],
  },
  {
    icon:  <img src='/public/Handy_7.png'/>,
    title: "Expertise",
    border: "border-blue-200",
    points: [
      "Our group has huge experience in developing industry-precise software program.",
      "We apprehend the specific challenges of running a handyman commercial enterprise and offer answers to conquer them.",
    ],
  },
  {
    icon:  <img src='/public/Handy_8.png'/>,
    title: "Support and Training",
    border: "border-yellow-200",
    points: [
      "Comprehensive training for your team to get the maximum out of the software.",
      "Ongoing support to address any issues and make certain clean operation.",
      "Reliable customer support for addressing desires related to handyman services list and handyman siding restore.",
    ],
  },
  {
    icon:  <img src='/public/Handy_9.png'/>,
    title: "Cost-Effective",
    border: "border-red-200",
    points: [
      "Competitive pricing plans to in shape organizations of all sizes.",
      "Significant ROI through stepped forward efficiency and consumer satisfaction.",
      "Affordable for businesses presenting services like handyman to put in lavatory arrogance and handyman to repair storage door.",
    ],
  },
  {
    icon:  <img src='/public/Handy_10.png'/>,
    title: "Innovation",
    border: "border-blue-200",
    points: [
      "Continuous updates to keep the software aligned with the state-of-the-art industry developments.",
      "Incorporation of recent capabilities to enhance functionality and user enjoy.",
    ],
  },
];

const Section_e = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-10 text-black">
      <div className="max-w-[1200px] mx-auto text-center px-5">
        <img
          src="https://webblazesofttech.com/wp-content/uploads/2024/10/Rectangle-42821.png"
          alt="Handyman Services Logo"
          className="mx-auto mb-6 max-w-[200px]"
        />
        <h2 className="text-2xl md:text-3xl font-bold mb-12">
          Why Choose Webblaze for Your Handyman Software Needs?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 place-items-start">
          {features.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 border ${item.border}`}
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <ul className="text-gray-800 list-disc pl-4 space-y-2 text-left">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">
          {features.slice(3).map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 border ${item.border}`}
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <ul className="text-gray-800 list-disc pl-4 space-y-2 text-left">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_e;
