import React from "react";

const cardContents = [
  {
    title: "Graphic Design Company in the USA and Beyond",
    description:
      "Webblaze is proud to offer our picture layout services to clients no longer handiest in India but also in the USA and distinctive global markets. Our crew understands the various layout preferences and tendencies across remarkable regions, ensuring that our designs are globally appealing.",
  },
  {
    title: "Graphic Designer Websites and Portfolios",
    description:
      "We keep in mind in showcasing our work transparently. Visit our picture style fashion designer website to explore our portfolio and word the top notch of our designs firsthand. Our portfolio functions a diverse range of initiatives, highlighting our versatility and creativity.",
  },
  {
    title: "Find the Best Graphic Designers Near You",
    description:
      "If you’re trying to find “photograph designers close to me” or “photograph format close to me,” look no in addition. Webblaze connects you with the amazing picture designers for your location, ensuring that you get keep of customized and localized layout offerings.",
  },
  {
    title: "Hire Graphic Designers for Your Business",
    description:
      "Whether you need a image artist for hire or a entire-provider picture layout employer, Webblaze has the skills and property to meet your wishes. We offer flexible hiring alternatives, permitting you to hire a designer for specific projects or on an ongoing foundation.",
  },
  {
    title: "Graphic Design Courses and Training",
    description:
      "Interested in learning photograph format? Webblaze gives photo format guides and education for novices and professionals alike. Our courses cowl a considerable range of topics, which consist of picture layout tools, techniques, and satisfactory practices.",
  },
  {
    title: "Elevate Your Brand with Webblaze",
    description:
      "In recent times’s competitive market, having a sturdy visible presence is crucial. Webblaze’s graphic layout offerings help you stand happy with the gang and leave a long lasting influence for your audience. Our group is devoted to handing over designs that not most effective look outstanding however additionally strain outcomes.",
  },
];

function Section_d() {
  return (
    <div
      className="relative w-full flex flex-col items-center justify-center overflow-x-hidden bg-[#fafbfc] py-12 px-4"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center right",
      }}
    >
      <div className="flex flex-wrap justify-center gap-8 max-w-7xl w-full">
        {cardContents.map((card, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[48%] lg:w-[30%] bg-white rounded-xl shadow-md p-6 border-b-4 border-blue-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-400 min-h-[473px]"
          >
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-600  text-base">{card.description}</p>
          </div>
        ))}
      </div>
      
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadein {
            animation: fadein 2s ease-in;
          }
        `}
      </style>
    </div>
  );
}

export default Section_d;
