
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is social media marketing (SMM)?',
    answer: 'SMM involves using social media platforms like Facebook, Instagram, and Twitter to promote a business, increase brand awareness, engage with customers, and drive sales.'
  },
  {
    question: 'Why is social media marketing important for businesses?',
    answer: 'SMM is important because it allows businesses to reach a large audience, build relationships with customers, increase brand loyalty, and improve visibility on platforms where people spend a lot of time.'
  },
  {
    question: 'How can I measure the success of my social media marketing campaign?',
    answer: 'Success can be measured through engagement metrics such as likes, shares, comments, and followers, as well as conversion rates and website traffic generated from social media platforms.'
  },
  {
    question: 'Which social media platform is best for my business?',
    answer: 'The best platform depends on your target audience and the nature of your business. Instagram and Pinterest work well for visual products, while LinkedIn is effective for B2B businesses. Facebook and Twitter are great for general engagement.'
  },
  {
    question: 'How do I create effective content for social media marketing?',
    answer: 'To create effective content, focus on your audience’s needs and interests. Use a mix of images, videos, infographics, and engaging captions. Also, post regularly and consistently, and use analytics to understand what resonates with your audience.'
  }
];

const Section_j = () => {
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

export default Section_j;
