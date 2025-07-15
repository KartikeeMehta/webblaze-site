
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is an LMS used for?',
    answer: 'Creating, managing, and delivering online education and training programs.'
  },
  {
    question: 'What features should I look for?',
    answer: 'Course creation, progress tracking, certification, gamification, and mobile access.'
  },
  {
    question: 'How much does it cost to develop?',
    answer: 'Development costs range from $3,000 to $50,000.'
  },
  {
    question: 'Can it integrate with other tools?',
    answer: 'Yes, often integrates with CRM, HRMS, and e-commerce platforms.'
  },
  {
    question: 'Is it suitable for corporate training?',
    answer: 'Yes, it’s widely used for employee onboarding and skill development.'
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
