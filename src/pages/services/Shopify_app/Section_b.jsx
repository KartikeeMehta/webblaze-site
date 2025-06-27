import React from "react";

const cardContents = [
  {
    title: "Shopify POS and Inventory Management",
    description:
      "Our Shopify POS apps are designed to streamline your sales approaches and stock management. The integration of Shopify POS systems with your on-line save enables seamless synchronization of sales and stock tiers. Our solutions are tailored for your particular desires, making sure that you get the excellent Shopify POS pricing and functionality. The Shopify POS Pro offers advanced capabilities that beautify your keep’s performance and purchaser revel in.",
  },
  {
    title: "Engaging Customer Interactions with Shopify Live Chat",
    description:
      "Enhance your customer support with our Shopify live chat apps. These apps facilitate real-time conversation together with your customers, assisting to resolve their queries instantly and enhancing their shopping enjoy. Our Shopify chat solutions are designed to be intuitive and person-friendly, providing a seamless interplay among you and your customers.",
  },
  {
    title: "Customizable Themes and Integration",
    description:
      "Webblaze gives services in developing and integrating Shopify themes that reflect your brand’s identification. Our Shopify subject store has a wide range of alternatives to pick out from. We also concentrate on integrating 1/3-party equipment like Klaviyo Shopify integration to reinforce your advertising and marketing efforts. This ensures that your shop isn’t always handiest visually attractive but also extraordinarily useful.",
  },
];

function Section_b() {
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
        Comprehensive Shopify App Development Services
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

export default Section_b;
