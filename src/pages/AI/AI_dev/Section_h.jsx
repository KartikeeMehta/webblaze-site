
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is AI development?',
    answer: 'AI development involves creating algorithms, models, and systems that allow computers to perform tasks that usually require human intelligence, such as learning, problem-solving, and decision-making.'
  },
  {
    question: 'How does AI development work?',
    answer: 'AI development combines data, algorithms, and computational power to create systems capable of learning from experience, making predictions, and improving performance over time.'
  },
  {
    question: 'What industries use AI development?',
    answer: 'AI development is used in various industries such as healthcare, finance, automotive, entertainment, retail, and marketing for tasks like automation, analysis, and customer service.'
  },
  {
    question: 'What are the benefits of AI development?',
    answer: 'AI development provides benefits such as improved efficiency, data-driven insights, automation of repetitive tasks, and enhanced decision-making processes.'
  },
  {
    question: 'How can I get started with AI development for my business?',
    answer: 'Start by identifying business needs that AI can address, such as customer service automation or predictive analytics, and then work with AI developers to build tailored solutions.'
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
