
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is AWS, and what services does it offer?',
    answer: 'AWS (Amazon Web Services) provides cloud services like computing, storage, databases, and machine learning.'
  },
  {
    question: 'How much does AWS cost?',
    answer: 'AWS uses a pay-as-you-go model; costs vary based on usage and services chosen.'
  },
  {
    question: 'What are the benefits of using AWS for businesses?',
    answer: 'AWS offers scalability, security, global reach, and a vast range of tools for various needs.'
  },
  {
    question: 'How do I migrate to AWS from on-premise?',
    answer: 'Assess workloads, plan architecture, and use AWS migration tools like AWS Server Migration Service.'
  },
  {
    question: 'What are the top AWS certifications in 2025?',
    answer: 'Certifications include AWS Solutions Architect, AWS Developer, and AWS SysOps Administrator.'
  }
];

const Section_f = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
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

export default Section_f;
