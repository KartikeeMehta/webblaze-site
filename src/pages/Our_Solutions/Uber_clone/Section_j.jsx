
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What features are included in an Uber clone app?',
    answer: 'Features include real-time tracking, fare estimation, ride history, payment integration, and user-friendly navigation.'
  },
  {
    question: 'How much does it cost to develop an Uber clone?',
    answer: 'Costs range from $3000 to $50,000 depending on features and customization.'
  },
  {
    question: 'Can I customize the Uber clone app to match my brand?',
    answer: 'Yes, it’s fully customizable to fit your branding and unique requirements.'
  },
  {
    question: 'What technology stack is used for Uber clone app development?',
    answer: 'Common technologies include Swift, Kotlin, Node.js, and Firebase.'
  },
  {
    question: 'Is an Uber clone legal to launch?',
    answer: 'Yes, provided it doesn’t infringe on Uber’s trademarks or intellectual property.'
  }
];

const Section_j = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions
      </h2>
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

export default Section_j;
