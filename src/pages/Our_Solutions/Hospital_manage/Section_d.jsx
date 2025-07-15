
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What are the key features of hospital management software',
    answer: 'Features include patient registration, appointment scheduling, billing, inventory management, and EHR.'
  },
  {
    question: 'How can hospital management software improve efficiency?',
    answer: 'By automating tasks, improving patient data management, and reducing manual errors'
  },
  {
    question: 'How much does hospital management software cost?',
    answer: 'Costs range from $3,000 to $100,000 based on complexity and scalability.'
  },
  {
    question: 'Can it integrate with existing systems?',
    answer: 'Yes, it’s designed for seamless integration with legacy systems'
  },
  {
    question: 'Is hospital management software secure?',
    answer: 'Yes, it complies with HIPAA and GDPR regulations for data security.'
  }
];

const Section_d = () => {
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

export default Section_d;
