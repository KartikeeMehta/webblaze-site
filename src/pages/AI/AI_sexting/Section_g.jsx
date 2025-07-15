
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is a sexting chatbot?',
    answer: 'A sexting chatbot is an AI-powered system designed to engage in consensual, adult-themed conversations with users while ensuring privacy and security.'
  },
  {
    question: 'How does a sexting chatbot work?',
    answer: 'Sexting chatbots use natural language processing (NLP) to understand and respond to user inputs in an engaging, personalized manner, maintaining privacy and confidentiality.'
  },
  {
    question: 'Is a sexting chatbot legal?',
    answer: 'Sexting chatbots are legal when used responsibly and within the boundaries of consent, privacy, and age restrictions. They should comply with relevant laws and regulations.'
  },
  {
    question: 'What are the benefits of using a sexting chatbot?',
    answer: 'Sexting chatbots provide users with a safe space to engage in adult conversations without the risk of exposure or privacy violations. They are also available anytime.'
  },
  {
    question: 'Can a sexting chatbot be customized?',
    answer: 'Yes, sexting chatbots can be customized to suit different user preferences, tones, and content, ensuring personalized interactions.'
  }
];

const Section_g = () => {
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

export default Section_g;
