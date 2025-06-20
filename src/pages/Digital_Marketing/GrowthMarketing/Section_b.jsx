
import React from "react";

const features = [
  {
    title: "Comprehensive Growth Strategy",
    description:
      "At Webblaze, we develop a holistic increase strategy tailored to your enterprise desires. Our technique includes marketplace studies, competitor evaluation, and identifying key increase possibilities. We integrate increase hacking strategies to accelerate your commercial enterprise enlargement successfully.",
    image: "/strategy.jpg",
    borderColor: "border-yellow-400",
  },
  {
    title: "Data-Driven Marketing",
    description:
      "We agree with within the energy of records to pressure choice-making. Our increase advertising and marketing services utilize advanced analytics to understand patron behavior, optimize advertising campaigns, and improve conversion quotes. Data-driven advertising and marketing is on the center of our methodology, ensuring unique concentrated on and measurable effects.",
    image: "/analytics.jpg",
    borderColor: "border-red-400",
  },
  {
    title: "Expert Marketing Team",
    description:
      "Our experienced advertising and marketing group at Webblaze is skilled in diverse components of digital marketing, consisting of search engine marketing, social media advertising, content material advertising, and PPC marketing. We collaborate intently along with your in-residence crew to supply seamless and impactful growth advertising techniques.",
    image: "/team.jpg",
    borderColor: "border-yellow-400",
  },
];

const Section_b = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Webblaze for Growth Marketing?
        </h2>
      </div>

      <div className="space-y-20">
        {features.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10 md:gap-20`}
          >
            <div className="relative w-[240px] h-[240px] shrink-0 rounded-full overflow-hidden">
              <div
                className={`absolute inset-0 z-0 rounded-full border-[6px] ${item.borderColor}`}
              ></div>
              <img
                src={item.image}
                alt={item.title}
                className="relative z-10 object-cover w-full h-full rounded-full"
              />
            </div>

            <div className="max-w-xl text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section_b;







