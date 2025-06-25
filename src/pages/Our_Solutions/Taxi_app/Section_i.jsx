
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What are the essential features of a taxi app?',
    answer: 'Real-time tracking, fare calculator, ride history, driver and passenger profiles, and payment options.'
  },
  {
    question: 'How much does it cost to build a taxi app?',
    answer: 'Development costs range from $3,000 to $50,000 depending on requirements.'
  },
  {
    question: 'Can I integrate a taxi app with other transport services?',
    answer: 'Yes, integration with buses, trains, or bike-sharing services is possible.'
  },
  {
    question: 'What is the best technology stack for taxi app development?',
    answer: 'Flutter, Swift, Kotlin, Firebase, and Node.js are commonly used.'
  },
  {
    question: 'Does the app include multi-language support?',
    answer: 'Yes, multi-language support can be included for localization.'
  }
];

const Section_h = () => {
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

export default Section_h;
