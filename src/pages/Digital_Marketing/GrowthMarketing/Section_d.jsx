
import React from "react";

const strategies = [
  {
    icon: "/hackGrowthIcon.png",
    title: "Growth Hacking Techniques",
    description:
      "Growth hacking is a critical issue of our increase advertising method. We enforce progressive increase hacking strategies to discover and exploit growth opportunities fast and efficiently. Our boom hacking offerings encompass viral advertising and marketing, referral packages, and user acquisition techniques.",
  },
  {
    icon: "/marketGrowthIcon.png",
    title: "Market Development Strategy",
    description:
      "Expanding into new markets is vital for business increase. At Webblaze, we create a robust marketplace improvement method that consists of marketplace studies, identifying target audiences, and developing tailored advertising and marketing campaigns to penetrate new markets effectively.",
  },
  {
    icon: "/prodcutGrowthIcon.png",
    title: "Product-Led Marketing",
    description:
      "Product-led increase is a method in which the product itself drives user acquisition and retention. Our product-led advertising technique specializes in growing great consumer experiences that inspire natural growth and patron loyalty.",
  },
  {
    icon: "/investmentIcon.png",
    title: "SaaS Growth Strategies",
    description:
      "For SaaS corporations, we provide specialized SaaS boom techniques that focus on client acquisition, retention, and lowering churn fees. Our strategies are designed to scale your SaaS enterprise efficaciously and sustainably.",
  },
];

const Section_d = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
          Implementing Effective Growth Strategies
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {strategies.map((strategy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm"
            >
              <img
                src={strategy.icon}
                alt={strategy.title}
                className="w-10 h-10 mb-4"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {strategy.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_d;
