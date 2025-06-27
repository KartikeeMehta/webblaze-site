import React from "react";

const contentSections = [
  {
    title: "Enhancing User Experience with Shopify Apps",
    cards: [
      {
        title: "Shopify Search and Discovery",
        description:
          "Improve your save’s navigation with our Shopify search and discovery apps. These apps make it easier for clients to locate the goods they may be looking for, improving their shopping enjoy. With functions like superior search filters and product tips, you may raise your income and customer pride.",
      },
      {
        title: "Shopify App Store and Plugins",
        description:
          "Webblaze develops a variety of plugins and apps available on the Shopify App Store. These plugins beautify the functionality of your keep, supplying functions like Shopify ordinary payments, Shopify membership, and greater. Our developers make certain that every app is adapted to fulfill your unique commercial enterprise desires.",
      },
      {
        title: "Mobile Optimization with Shopify Mobile App Builder",
        description:
          "In these days’s cell-first global, having a cellular-optimized store is crucial. Our Shopify cellular app builder services ensure that your store is accessible and consumer-pleasant on all devices. We create responsive designs that offer a unbroken buying enjoy across smartphones and tablets.",
      },
    ],
  },
];

function Section_d() {
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
      <div className="max-w-[1200px] mx-auto px-4 space-y-20">
        {contentSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-12">
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
              {section.title}
            </h2>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {section.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    {/* Card Title */}
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {card.title}
                    </h3>
                    {/* Card Description */}
                    <p className="text-gray-50 leading-relaxed">
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

export default Section_d;
