import React, { useState } from "react";

const faqs = [
  {
    question: "What is shopping in the Metaverse?",
    answer:
      "Shopping in the Metaverse involves purchasing virtual goods or services within a digital world or platform. Users can buy virtual items like clothes, accessories, or even real-world products through a virtual storefront or marketplace.",
  },
  {
    question: "How do you make payments in the Metaverse?",
    answer:
      "Payments in the Metaverse are typically made using cryptocurrencies, virtual currencies, or digital wallets. Some platforms also accept traditional payments through integration with existing payment processors.",
  },
  {
    question: "Is shopping in the Metaverse safe?",
    answer:
      "Shopping in the Metaverse can be safe if users take precautions, such as using secure platforms, verifying sellers, and using trusted payment methods. However, as with any online activity, it’s important to exercise caution.",
  },
  {
    question: "Can I buy physical products in the Metaverse?",
    answer:
      "Some Metaverse platforms allow users to buy virtual versions of physical products or access real-world e-commerce sites via digital storefronts. However, the Metaverse itself is primarily focused on virtual goods.",
  },
  {
    question: "What are the advantages of shopping in the Metaverse?",
    answer:
      "Shopping in the Metaverse offers convenience, immersive experiences, access to unique digital goods, and the ability to socialize with other shoppers in virtual spaces. It provides a new, interactive way of browsing and buying.",
  },
];

const Section_f = () => {
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

export default Section_f;
