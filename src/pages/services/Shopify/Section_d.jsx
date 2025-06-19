import React from "react";

const contentSections = [
  {
    title: "Enhancing Functionality",
    cards: [
      {
        title: "Shopify App Development",
        description:
          "Webblaze gives complete Shopify app development offerings to increase your store's capability. Our developers create custom apps tailor-made on your specific business wishes, from stock management to customer relationship management. We make certain those apps integrate seamlessly together with your Shopify shop, improving its abilities and patron level in.",
      },
      {
        title: "Shopify Subscription Models",
        description:
          "For groups looking to enforce subscription-based services, Webblaze presents professional consultation and improvement for Shopify subscription models. Our crew configures subscription plans that automate recurring bills, manipulate subscriptions correctly, and provide customers flexible alternatives, riding patron loyalty and steady revenue streams.",
      },
    ],
  },
  {
    title: "Marketing and Sales Optimization",
    cards: [
      {
        title: "Shopify Dropshipping Solutions",
        description:
          "Webblaze gives professional Shopify dropshipping solutions, helping you set up and control your dropshipping save successfully. Our services encompass sourcing products, integrating with dropshipping providers, and automating order success processes. With our dropshipping solutions, you may cognizance on marketing and developing your enterprise even as we take care of the technical components.",
      },
      {
        title: "Shopify Plus Services",
        description:
          "For corporation-level solutions, Webblaze provides comprehensive Shopify Plus services. Our group guarantees your Shopify Plus keep is ready with superior capabilities, excessive scalability, and sturdy security measures. We tailor Shopify Plus to satisfy the precise wishes of massive-scale corporations, providing an extraordinary e-trade enjoy.",
      },
    ],
  },
];

function Section_d() {
  return (
    <div className="relative w-full py-16 md:py-24 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-[1000px] mx-auto px-4 space-y-20">
        {contentSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-12">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
              {section.title}
            </h2>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {section.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="space-y-4">
                    {/* Card Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                      {card.title}
                    </h3>
                    {/* Card Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Background Dots Pattern */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-purple-500"></div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.6s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default Section_d;
