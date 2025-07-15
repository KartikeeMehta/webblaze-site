import React, { useState } from "react";

const faqs = [
  {
    question: "What is growth marketing?",
    answer:
      "Growth marketing focuses on strategies and tactics aimed at achieving sustainable growth, often through a combination of data-driven insights, experimentation, and cross-channel marketing.",
  },
  {
    question: "How is growth marketing different from traditional marketing?",
    answer:
      "Growth marketing emphasizes experimentation, rapid testing, and optimization to achieve measurable growth. Traditional marketing focuses on broad strategies and longer-term campaigns.",
  },
  {
    question: "What are some effective growth marketing strategies?",
    answer:
      "Effective strategies include content marketing, influencer marketing, referral programs, email marketing, paid ads, and social media campaigns. It’s important to test and iterate based on data.",
  },
  {
    question: "How do I measure the success of growth marketing efforts?",
    answer:
      "Success is measured through KPIs like user acquisition, retention, engagement, conversion rates, and lifetime value (LTV) of customers.",
  },
  {
    question: "Can growth marketing work for small businesses?",
    answer:
      "Yes, growth marketing can work for small businesses by focusing on cost-effective strategies like viral marketing, referrals, and content creation, leveraging data to maximize results.",
  },
];

const Section_h = () => {
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
        <button className="bg-[#1C92FF] hover:bg-white hover:border-[#1C92FF] border-[2px] hover:text-[#1C92FF] text-white px-6 py-3 rounded-xl shadow-md transition">
          Talk to expert
        </button>
      </div>
    </div>
  );
};

export default Section_h;
