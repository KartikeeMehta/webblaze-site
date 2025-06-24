
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What features should a Cash App clone include?',
    answer: 'Essential features include peer-to-peer payments, bill payments, bank integration, and transaction history.'
  },
  {
    question: 'How much does it cost to develop a Cash App clone?',
    answer: 'Development costs typically range from $15,000 to $80,000 based on features and complexity.'
  },
  {
    question: 'Is it safe to use a Cash App clone for payments?',
    answer: 'Yes, if the app employs encryption, two-factor authentication, and secure APIs.'
  },
  {
    question: 'Can I customize a Cash App clone for my business?',
    answer: 'Yes, you can customize the app to include specific features and branding.'
  },
  {
    question: 'How does a Cash App clone make money?',
    answer: 'Revenue sources include transaction fees, premium features, and advertising.'
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
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-[10px] shadow-md transition">
          Talk to expert
        </button>
      </div>
    </div>
  );
};

export default Section_f;
