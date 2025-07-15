import React from "react";

const cardContents = [
  {
    title: "Custom Shopify Store Development",
    description:
      "At Webblaze, we offer end-to-end solutions for custom Shopify store development. Our services include creating unique themes, integrating essential plugins, and configuring advanced features. Whether you're launching a new Shopify store or revamping an existing one, we ensure a seamless, standout presence in the competitive market.",
  },
  {
    title: "Shopify POS Integration",
    description:
      "Webblaze excels at integrating Shopify POS systems to streamline your retail operations. Our experts configure the POS system to efficiently manage in-store and online sales, offering real-time inventory updates, smooth transactions, and enhanced customer experiences.",
  },
  {
    title: "Shopify Capital Consultation",
    description:
      "Navigating Shopify Capital can be complex, but Webblaze makes it simple. We guide you through the application process to help secure funding for your business. Our team helps you leverage Shopify Capital to boost your store's capabilities and drive growth.",
  },
];

function Section_b() {
  return (
    <div
      className="w-full bg-[#fafbfc] bg-no-repeat bg-right md:bg-contain bg-cover py-12 px-4"
      style={{
        backgroundImage: "url('/bg_section_b_shopify.png')",
      }}
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Comprehensive Shopify Solutions
        </h2>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-4">
        {cardContents.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 sm:p-8 border-b-4 border-blue-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-400"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              {card.title}
            </h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">
              {card.description}
            </p>
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
