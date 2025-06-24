import React, { useState } from "react";

const faqs = [
  {
    question: "How can I start my own ecommerce website?",
    answer:
      "Choose a platform, add products, set up payment and shipping options, and promote your site online.",
  },
  {
    question: "How much does it cost to build an ecommerce website?",
    answer:
      "Costs vary from $5,000 to $50,000+, depending on features and design.",
  },
  {
    question: "What are the must-have features for an ecommerce website?",
    answer:
      "Essential features include user-friendly navigation, secure checkout, mobile responsiveness, and detailed product pages.",
  },
  {
    question: "Which platform is best for ecommerce development?",
    answer:
      "Popular platforms include Shopify, WooCommerce, Magento, and BigCommerce.",
  },
  {
    question: "How do ecommerce websites attract customers?",
    answer:
      "Strategies include SEO, social media marketing, email campaigns, and offering discounts or promotions.",
  },
];

const Section_d = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left flex justify-between items-center py-4 text-lg font-medium text-gray-900"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="text-blue-500 text-2xl">
              {openIndex === index ? "-" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="pb-4 text-gray-700">{faq.answer}</div>
          )}
        </div>
      ))}
      <div className="mt-10">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-[10px] shadow-md transition">
          Talk to expert
        </button>
      </div>
    </div>
  );
};

export default Section_d;
