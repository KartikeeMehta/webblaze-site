import React from "react";
import { FaRegClock, FaRegSmile, FaChartBar, FaExpandAlt, FaComments } from "react-icons/fa";

const benefits = [
  {
    icon:  <img src='/public/Handy_1.png'/>,
    title: "Increased Efficiency",
    border: "border-b-[3px] border-red-500",
    points: [
      "Reduce administrative workload with automation.",
      "Streamline techniques from scheduling to invoicing.",
      "Manage more than one carrier requests which includes handyman offerings for seniors and handyman roofers near me correctly.",
    ],
  },
  {
    icon:  <img src='/public/Handy_2.png'/>,
    title: "Enhanced Customer Experience",
    border: "border-b-[3px] border-blue-500",
    points: [
      "Provide timely and reliable offerings.",
      "Keep customers informed with automatic notifications.",
      "Improve purchaser pleasure for requests like nearby handyman services close to me and handyman roof restore close to me.",
    ],
  },
  {
    icon:  <img src='/public/Handy_3.png'/>,
    title: "Better Financial Management",
    border: "border-b-[3px] border-yellow-400",
    points: [
      "Track prices and sales accurately.",
      "Simplify financial reporting and tax preparation.",
      "Ensure activate bills for services like handyman to install gutter guards and handyman rest room redecorate.",
    ],
  },
  {
    icon:  <img src='/public/Handy_4.png'/>,
    title: "Scalability",
    border: "border-b-[3px] border-red-500",
    points: [
      "Easily scale your operations as your business grows.",
      "Add more customers and extend service regions with out problem.",
      "Handle growing demand for offerings like handyman to install ceiling fan and handyman carpet set up.",
    ],
  },
  {
    icon: <img src='/public/Handy_5.png'/>,
    title: "Improved Communication",
    border: "border-b-[3px] border-blue-500",
    points: [
      "Seamless verbal exchange between workplace team of workers and discipline technicians.",
      "Real-time updates on job statuses and necessities.",
      "Efficiently coordinate obligations like handyman carpet installation and handyman to put in typhoon door.",
    ],
  },
];

const Section_d = () => {
  return (
    <section className="bg-[#f9fbfc] py-20 px-6 md:px-10 text-black">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Benefits of Using Webblaze’s Handyman Software
        </h2>

        <div className="grid md:grid-cols-3 gap-8 place-items-start">
          {benefits.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className={`bg-white shadow-md p-6 text-left rounded-md ${item.border}`}
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <ul className="text-gray-800 list-disc pl-4 space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 place-items-start mt-10 max-w-5xl mx-auto">
          {benefits.slice(3).map((item, index) => (
            <div
              key={index}
              className={`bg-white shadow-md p-6 text-left rounded-md ${item.border}`}
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <ul className="text-gray-800 list-disc pl-4 space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_d;
