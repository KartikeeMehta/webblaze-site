
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is AI chatbot development?',
    answer: 'AI chatbot development involves creating automated chatbots powered by artificial intelligence that can understand and respond to user queries in natural language.'
  },
  {
    question: 'How does an AI chatbot work?',
    answer: 'AI chatbots use natural language processing (NLP) to understand user inputs, analyze context, and provide relevant responses, simulating human-like conversations.'
  },
  {
    question: 'What are the benefits of AI chatbots for businesses?',
    answer: 'AI chatbots can improve customer support, reduce response times, enhance user engagement, and save operational costs by automating routine tasks.'
  },
  {
    question: 'Can AI chatbots be integrated into my website or app?',
    answer: 'Yes, AI chatbots can be integrated into websites, mobile apps, and messaging platforms to provide instant support and automate communication.'
  },
  {
    question: 'How much does it cost to develop an AI chatbot?',
    answer: 'The cost of developing an AI chatbot depends on its complexity, features, and platform. Simple chatbots may cost less, while more advanced bots with machine learning capabilities could be more expensive.'
  }
];

const Section_k = () => {
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

export default Section_k;
