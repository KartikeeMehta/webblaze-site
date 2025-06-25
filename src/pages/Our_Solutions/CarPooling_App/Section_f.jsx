
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is carpooling and how does it work?',
    answer: 'Carpooling is sharing a ride with others traveling to the same or nearby destinations, reducing costs and environmental impact.'
  },
  {
    question: 'How can I find carpooling services near me?',
    answer: 'Use carpooling apps or websites to search for available rideshares in your area.'
  },
  {
    question: 'Is carpooling safe for daily commutes?',
    answer: 'Yes, carpooling is generally safe. Most platforms have driver verification and user reviews to ensure security.'
  },
  {
    question: 'Can I carpool without owning a car?',
    answer: 'Absolutely! You can join as a passenger by booking rides through carpooling apps or websites.'
  },
  {
    question: 'What are the benefits of carpooling?',
    answer: 'Carpooling saves money, reduces traffic, lowers emissions, and fosters community connections.'
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
