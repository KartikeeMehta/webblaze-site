import React from "react";

const contentSections = [
  {
    title: "Analytics and Reporting",
    cards: [
      {
        title: "Shopify Analytics Integration",
        description:
          "Understanding your save's performance is crucial, and Webblaze helps you gain this with our Shopify analytics integration services. We configure Shopify analytics to provide specific reviews on sales, patron behavior, and product overall performance. Our insights assist you're making records-pushed decisions to optimize your store and improve sales.",
      },
      {
        title: "Shopify Analytics Integration",
        description:
          "Understanding your save's performance is crucial, and Webblaze helps you gain this with our Shopify analytics integration services. We configure Shopify analytics to provide specific reviews on sales, patron behavior, and product overall performance. Our insights assist you're making records-pushed decisions to optimize your store and improve sales.",
      },
    ],
  },
  {
    title: "Expert Support and Maintenance",
    cards: [
      {
        title: "Ongoing Shopify Support",
        description:
          "At Webblaze, we accept as true with in imparting continuous aid to our customers. Our ongoing Shopify support services include ordinary updates, troubleshooting, and performance optimization. Our group is constantly to be had to address any issues and make certain your keep operates easily without interruptions.",
      },
      {
        title: "Shopify Experts Consultation",
        description:
          "Our Shopify specialists at Webblaze provide session offerings that will help you make knowledgeable choices approximately your e-trade strategy. Whether you need advice on save setup, customization, or marketing techniques, our specialists offer treasured insights and hints to force your business forward.",
      },
    ],
  },
];

function Section_e() {
  return (
    <div
      className="relative w-full py-16 md:py-24 bg-[#1B1F2E]"
      style={{
        backgroundImage:
          "url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')", // Replace with your actual background image
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1000px] mx-auto px-4 space-y-20">
        {contentSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-12">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              {section.title}
            </h2>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {section.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="bg-[#1E2436] rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    {/* Card Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {card.title}
                    </h3>
                    {/* Card Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-blue-500"></div>
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
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.1); }
            50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.2); }
          }
          .card-glow {
            animation: glow 3s infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Section_e;
