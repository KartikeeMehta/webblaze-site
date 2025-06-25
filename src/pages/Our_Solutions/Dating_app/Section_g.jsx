
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What features are essential for a dating app?',
    answer: 'Must-have features include profile creation, swiping functionality, chat options, location-based matching, and security settings.'
  },
  {
    question: 'How do dating apps ensure user safety?',
    answer: 'They use profile verification, report/block options, and encryption to enhance user safety.'
  },
  {
    question: 'How much does it cost to build a dating app?',
    answer: 'Costs range from $5,000 to $100,000+, depending on features and complexity.'
  },
  {
    question: 'Can I make a niche dating app',
    answer: 'Yes, you can create niche dating apps targeting specific communities, interests, or demographics.'
  },
  {
    question: 'What makes a dating app successful?',
    answer: 'A seamless user experience, robust matching algorithms, and strong security measures contribute to a successful dating app.'
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
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-[10px] shadow-md transition">
          Talk to expert
        </button>
      </div>
    </div>
  );
};

export default Section_g;
