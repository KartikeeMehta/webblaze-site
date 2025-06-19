import React from "react";

const contentSections = [
  {
    title: "Our Angular.Js Development Services",
    title2:
      "At Webblaze, we offer a comprehensive range of Angular.Js development services tailor-made to your precise wishes:",
    cards: [
      {
        title: "Custom Angular.Js Development",
        description:
          "Crafting bespoke web packages from scratch based on your unique necessities.",
      },
      {
        title: "Angular.Js UI/UX Design",
        description:
          "Creating intuitive user interfaces that decorate usability and engagement.",
      },
      {
        title: "Angular.Js Migration Services",
        description:
          "Seamlessly migrating your packages from Angular.Js to the present day versions for greater overall performance",
      },
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
          <div key={sectionIndex}>
            {/* Section Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
              {section.title}
            </h2>
            <h4 className="text-.5xl md:text-1xl text-center text-white mb-12 mt-3">
              {section.title2}
            </h4>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
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

export default Section_d;
