
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What features should a DoorDash clone have?',
    answer: 'Key features include real-time order tracking, multiple payment options, user-friendly interfaces, and restaurant/vendor management.'
  },
  {
    question: 'How much does it cost to develop a DoorDash clone app?',
    answer: 'Costs vary based on features, complexity, and development team but typically range from $5,000 to $50,000.'
  },
  {
    question: 'Can I customize a DoorDash clone for my business?',
    answer: 'Yes, most development companies offer customization options to meet your business needs.'
  },
  {
    question: 'How does a DoorDash clone app make money?',
    answer: 'Revenue streams include delivery charges, service fees, restaurant commissions, and in-app advertisements.'
  },
  {
    question: 'How long does it take to develop a DoorDash clone?',
    answer: 'Development time depends on features and team size, typically taking 3–6 months.'
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
