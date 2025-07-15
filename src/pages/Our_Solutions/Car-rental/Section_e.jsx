
import React, { useState } from 'react';

const faqs = [
  {
    question: 'How can I rent a car online?',
    answer: 'You can rent a car online by visiting car rental websites or apps, selecting your desired location, car type, rental dates, and completing the booking process'
  },
  {
    question: 'What documents do I need to rent a car?',
    answer: 'Typically, you need a valid driver’s license, a credit card, and sometimes proof of insurance to rent a car.'
  },
  {
    question: 'Can I rent a car without a credit card?',
    answer: 'Some car rental companies accept debit cards or cash, but most require a credit card for security purposes.'
  },
  {
    question: 'What is the minimum age to rent a car?',
    answer: 'The minimum age varies but is generally 21. Some companies allow rentals at 18 or charge a “young driver fee” for those under 25.'
  },
  {
    question: 'Do car rentals include insurance?',
    answer: 'Basic insurance is often included, but you can opt for additional coverage like collision damage waivers or personal accident insurance.'
  }
];

const Section_e = () => {
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

export default Section_e;
