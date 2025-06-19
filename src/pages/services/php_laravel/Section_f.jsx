import React, { useState } from "react";

const faqData = [
  {
    question: "What's new in Shopify 2.0?",
    answer:
      "Shopify 2.0 introduces several new features including improved theme architecture, enhanced customization options, and better content management capabilities. The platform now offers more flexible section-based templates, improved metafields, and better developer tools.",
  },
  {
    question: "How do I migrate to Shopify 2.0?",
    answer:
      "Migration to Shopify 2.0 involves updating your theme to be compatible with the new architecture. Our team can help you with a smooth transition, including theme updates, content migration, and ensuring all functionalities work correctly in the new version.",
  },
  {
    question: "Can I customize Shopify 2.0 themes?",
    answer:
      "Yes, Shopify 2.0 offers enhanced customization capabilities. You can modify sections, add custom fields, and create unique layouts for different pages. The new theme architecture provides more flexibility for both developers and store owners.",
  },
  {
    question: "Is Shopify 2.0 SEO-friendly?",
    answer:
      "Yes, Shopify 2.0 is designed with SEO in mind. It includes improved meta fields, better URL structures, and enhanced performance optimization features that can help improve your store's search engine rankings.",
  },
  {
    question: "What are the costs associated with Shopify 2.0?",
    answer:
      "The costs for Shopify 2.0 vary depending on your needs. Basic Shopify plans start at $29/month, while advanced features and Shopify Plus have different pricing tiers. Additional costs may include theme purchases, apps, and custom development work.",
  },
];

function Section_f() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="relative w-full py-16 md:py-24 bg-[#fafbfc]"
      style={{
        backgroundImage: "url('/bg_section_f_shopify.png')", // Replace with your actual background image
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1000px] mx-auto px-4">
        {/* FAQ Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          FAQ
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <span
                  className={`transform transition-transform duration-200 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  <svg
                    className="w-5 h-5 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-48 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Talk to Expert Button */}
        <div className="mt-12 text-center">
          <button className="bg-blue-500 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors duration-200 transform hover:scale-105">
            Talk to Expert
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown {
            animation: slideDown 0.2s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}

export default Section_f;
