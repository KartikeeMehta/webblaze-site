
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is restaurant management software used for?',
    answer: 'Managing orders, inventory, reservations, billing, and employee scheduling.'
  },
  {
    question: 'How can it improve restaurant operations?',
    answer: 'By streamlining processes, reducing errors, and improving customer satisfaction.'
  },
  {
    question: 'How much does it cost to develop?',
    answer: 'Costs range from $3,000 to $20,000 based on features.'
  },
  {
    question: 'Does it support online ordering?',
    answer: 'Yes, many solutions include online ordering and delivery management.'
  },
  {
    question: 'Is it suitable for small restaurants?',
    answer: 'Yes, it’s scalable to suit small to large establishments.'
  }
];

const Section_f = () => {
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

export default Section_f;
