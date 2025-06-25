
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What are the key features of real estate management software?',
    answer: 'Property listings, lead management, CRM, financial tracking, and analytics.'
  },
  {
    question: 'How does it benefit real estate agencies?',
    answer: 'Enhances efficiency by automating property management and improving client relationships.'
  },
  {
    question: 'How much does it cost to develop?',
    answer: 'Costs range from $5,000 to $50,000 based on complexity.'
  },
  {
    question: 'Does it support multiple user roles?',
    answer: 'Yes, with different access levels for agents, clients, and admins.'
  },
  {
    question: 'Can it integrate with marketing tools?',
    answer: 'Yes, integration with email marketing and social media platforms is possible.'
  }
];

const Section_e = () => {
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
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-[10px] shadow-md transition">
          Talk to expert
        </button>
      </div>
    </div>
  );
};

export default Section_e;
