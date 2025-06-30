import React from "react";

const cardContents = [
  {
    title: "Custom Shopify Store Development",
    description:
      "At Webblaze, we offer quit-to-quit answers for custom Shopify save improvement. Our services consist of developing unique themes, integrating important plugins, and configuring advanced capabilities. Whether you’re trying to installation a new Shopify shop or revamp an current one, our builders ensure a seamless process, handing over a shop that sticks out in the competitive marketplace.",
  },
  {
    title: "Shopify POS Integration",
    description:
      "Webblaze excels in integrating Shopify POS structures to streamline your retail operations. Our experts configure the Shopify POS machine to manipulate in-keep and on-line income efficiently. With our integration services, you may experience actual-time stock updates, easy transactions, and more suitable client reviews.",
  },
  {
    title: "Shopify Capital Consultation",
    description:
      "Navigating Shopify Capital may be complex, but our specialists at Webblaze simplify the technique for you. We guide you through the software, making sure you secure the important investment to grow your commercial enterprise. Our team assists in leveraging Shopify Capital to beautify your save’s abilities and power income.",
  },
];

function Section_b() {
  return (
    <div
      className="w-full flex flex-col items-center justify-center overflow-x-hidden bg-[#fafbfc]"
      style={{
        backgroundImage: "url('/bg_section_b_shopify.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center right",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 mt-8 text-gray-900">
        Comprehensive Shopify Solutions
      </h2>
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 justify-center items-stretch px-4 pb-12">
        {cardContents.map((card, idx) => (
          <div
            key={idx}
            className="flex-1 bg-white rounded-xl shadow-md p-8 border-b-4 border-blue-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-400 min-w-[260px] max-w-full min-h-[px]"
            style={{ minWidth: "260px" }}
          >
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-600 text-base leading-8">{card.description}</p>
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

export default Section_b;
