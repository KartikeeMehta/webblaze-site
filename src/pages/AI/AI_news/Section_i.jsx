
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is an AI news anchor?',
    answer: 'An AI news anchor is an artificial intelligence-powered system designed to deliver news in a natural, human-like manner. It uses text-to-speech and facial recognition technologies to simulate a real news presenter.'
  },
  {
    question: 'How does an AI news anchor work?',
    answer: ' AI news anchors gather news content through algorithms, analyze it, and then present it in a scripted or live broadcast format using synthetic speech and virtual avatars.'
  },
  {
    question: 'What are the benefits of AI news anchors?',
    answer: 'AI news anchors provide 24/7 news coverage, reduce production costs, and can broadcast in multiple languages with real-time updates.'
  },
  {
    question: 'Can AI news anchors be used for live events?',
    answer: ' Yes, AI news anchors can be programmed for live broadcasting, providing real-time updates during events or breaking news situations.'
  },
  {
    question: 'What industries use AI news anchors?',
    answer: 'AI news anchors are used in media, broadcasting, journalism, and entertainment industries to automate content delivery and improve efficiency.'
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
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-[10px] shadow-md transition">
          Talk to expert
        </button>
      </div>
    </div>
  );
};

export default Section_g;
