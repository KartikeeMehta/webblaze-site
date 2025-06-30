import React from "react";

const cardContents = [
  {
    title: "Shopify Wholesale and B2B Solutions",
    description:
      "Expand your enterprise to new markets with our Shopify wholesale app and B2B solutions. These apps assist you to manipulate wholesale customers and orders correctly. With functions like bulk pricing and order management, you can cater to the needs of your wholesale customers correctly.",
  },
  {
    title: "Shopify Returns and Loyalty Programs",
    description:
      "Manage returns seamlessly with our Shopify returns app. This app simplifies the go back procedure to your clients, improving their usual buying revel in. Additionally, our Shopify loyalty apps help you create rewarding applications that encourage repeat purchases and purchaser loyalty.",
  },
  {
    title: "Advanced Analytics and Reporting",
    description:
      "Get specified insights into your save’s overall performance with our advanced analytics apps. These apps offer complete reports on sales, patron behavior, and greater, assisting you are making informed business selections. Our Shopify analytics app integrates smoothly with your keep, providing real-time information that is easy to understand and act upon.",
  },
];

function Section_e() {
  return (
    <div
      className="relative h-[745px] w-full flex flex-col items-center justify-center overflow-x-hidden bg-[#fafbfc]"
      style={{
        backgroundImage: "url('/bg_section_b_shopify.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center right",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 mt-8 text-gray-900">
        Specialized Shopify Apps for Enhanced Functionality
      </h2>
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 justify-center items-stretch px-4 pb-12">
        {cardContents.map((card, idx) => (
          <div
            key={idx}
            className="flex-1 bg-white rounded-xl shadow-md p-8 border-b-4 border-blue-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-400 min-w-[260px] max-w-full min-h-[473px]"
            style={{ minWidth: "260px" }}
          >
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-600 text-base">{card.description}</p>
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

export default Section_e;
