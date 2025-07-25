import React from "react";
import competitivePricing from "../../../assets/competitivePricing.png";
import watchIcon from "../../../assets/watchIcon.png";
import experienceIcon from "../../../assets/experienceIcon.png";
import clientIcon from "../../../assets/clientIcon.png";

const Section_d = () => {
  const data = [
    {
      icon: experienceIcon,
      title: "Experience and Expertise",
      desc: "Our team comprises some of the high-quality WordPress builders within the enterprise, with years of revel in in delivering wonderful WordPress web sites.",
      bgColor: "bg-blue-600",
    },
    {
      icon: clientIcon,
      title: "Client-Centric Approach",
      desc: "We prioritize our customers' needs and work intently with them to make certain their vision is found out.",
      bgColor: "bg-red-400",
    },
    {
      icon: competitivePricing,
      title: "Competitive Pricing",
      desc: "Our offerings are priced competitively, offering notable cost for your investment.",
      bgColor: "bg-yellow-300",
    },
    {
      icon: watchIcon,
      title: "Timely Delivery",
      desc: "We adhere to strict timelines and make sure your mission is added on time, on every occasion.",
      bgColor: "bg-yellow-300",
    },
  ];

  return (
    <section className="bg-[#0B0F1C] bg-[url('background-lines.webp')] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
          Why Work with Webblaze?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500 transition-colors duration-300 rounded-xl p-6 sm:p-8 w-full text-left text-white flex flex-col"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bgColor} mb-5`}
              >
                <img src={item.icon} alt="icon" className="w-6 h-6" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_d;
