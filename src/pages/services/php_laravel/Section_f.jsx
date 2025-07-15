import React, { useState } from "react";

const faqData = [
  {
    question: "What is the difference between Laravel, CodeIgniter, CakePHP, and CorePHP?",
    answer:
      "Laravel, CodeIgniter, and CakePHP are frameworks, offering pre-built tools for faster development, while CorePHP involves coding from scratch.",
  },
  {
    question: "Which PHP framework is best for web development?",
    answer:
      "Laravel is preferred for complex applications, CodeIgniter for simplicity, and CakePHP for rapid development.",
  },
  {
    question: "How much does it cost to develop a PHP-based website?",
    answer:
      "Development costs range from $500 to $20,000+, depending on complexity and features.",
  },
  {
    question: "Is PHP still relevant in 2025 for web development?",
    answer:
      "Yes, PHP powers 75%+ of websites, with robust frameworks like Laravel and WordPress ensuring its continued relevance.",
  },
  {
    question: "What are the advantages of using PHP frameworks over CorePHP?",
    answer:
      "Frameworks provide better security, faster development, and built-in features for common tasks.",
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
                  className={`transform transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""
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
                className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${openIndex === index ? "max-h-48 py-4" : "max-h-0"
                  }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Talk to Expert Button */}
        <div className="mt-10">
         <button className="bg-[#1C92FF] hover:bg-white hover:border-[#1C92FF] border-[2px] hover:text-[#1C92FF] text-white px-6 py-3 rounded-xl shadow-md transition">
          Talk to expert
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
