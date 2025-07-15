
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What features should an OnlyFans clone have?',
    answer: 'Key features include subscription management, content monetization, in-app messaging, and robust security.'
  },
  {
    question: 'How do creators make money on an OnlyFans clone?',
    answer: 'Creators earn through subscriptions, tips, pay-per-view content, and live streams.'
  },
  {
    question: 'How much does it cost to develop an OnlyFans clone?',
    answer: 'Development costs range from $6,000 to $70,000, depending on the features.'
  },
  {
    question: 'Is it legal to create an OnlyFans clone?',
    answer: 'Yes, as long as you avoid infringing on copyrighted material and comply with local laws'
  },
  {
    question: 'How can I attract users to my OnlyFans clone platform?',
    answer: 'Use influencer partnerships, social media marketing, and exclusive content to draw users.'
  }
];

const Section_i = () => {
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
        <button className="bg-[#1C92FF] hover:bg-white hover:border-[#1C92FF] border-[2px] hover:text-[#1C92FF] text-white px-6 py-3 rounded-xl shadow-md transition">
          Talk to expert
        </button>
      </div>
    </div>
  );
};

export default Section_i;
