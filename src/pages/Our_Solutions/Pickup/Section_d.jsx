import React, { useState } from "react";

const faqs = [
  {
    question: "What features are essential for a pickup and delivery app?",
    answer:
      "Key features include order tracking, scheduling, multiple payment options, and customer support.",
  },
  {
    question: "How much does it cost to develop a pickup and delivery app?",
    answer:
      "Development costs typically range from $5,000 to $50,000, depending on the app’s complexity.",
  },
  {
    question: "How do pickup and delivery apps ensure timely service?",
    answer:
      "By using GPS tracking, optimized routes, and real-time updates for drivers and customers.",
  },
  {
    question: "Can I customize a pickup and delivery app for my business?",
    answer:
      "Yes, many app development companies offer customization to suit your specific needs.",
  },
  {
    question: "What industries benefit from pickup and delivery apps?",
    answer:
      "Industries like food, groceries, courier services, and e-commerce widely use such apps.",
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
