import React, { useState } from "react";

const faqData = [
  {
    question: "What are Shopify apps, and why are they important?",
    answer:
      "Shopify apps enhance your store by adding features like marketing tools, inventory management, and advanced analytics.",
  },
  {
    question: "How do I install a Shopify app on my store?",
    answer:
      "Go to the Shopify App Store, select an app, and click “Add app.” Follow the setup instructions to integrate it.",
  },
  {
    question: "What are the best Shopify apps for e-commerce?",
    answer:
      "Popular apps include Oberlo (dropshipping), Klaviyo (email marketing), and Yotpo (reviews).",
  },
  {
    question: "How much do Shopify apps cost?",
    answer:
      "Apps range from free to $100+ per month, depending on features and functionality.",
  },
  {
    question: "Can I create a custom app for my Shopify store?",
    answer:
      "Yes, custom apps can be built using Shopify’s API to meet specific business needs.",
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
