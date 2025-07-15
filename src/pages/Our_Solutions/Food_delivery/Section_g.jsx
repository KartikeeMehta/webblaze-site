
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What are the essential features of a food delivery app?',
    answer: 'Real-time order tracking, restaurant listing, in-app payments, and delivery scheduling.'
  },
  {
    question: 'How much does it cost to develop a food delivery app?',
    answer: 'Development costs range from $5,000 to $50,000.'
  },
  {
    question: 'Can the app include multiple payment options?',
    answer: 'Yes, it can integrate cards, wallets, and UPI.'
  },
  {
    question: 'Does the app support user reviews?',
    answer: 'Yes, it allows users to rate and review orders.'
  },
  {
    question: 'Is it customizable for niche food delivery?',
    answer: 'Yes, it can be tailored for specific cuisines or dietary preferences.'
  }
];

const Section_g = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left flex justify-between items-center py-4 text-lg font-medium text-gray-900"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="text-blue-500 text-2xl">{openIndex === index ? '-' : '+'}</span>
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

export default Section_g;
