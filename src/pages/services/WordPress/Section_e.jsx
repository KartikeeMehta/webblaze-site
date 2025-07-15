import React, { useState } from 'react';

const faqItems = [
  {
    question: 'What is WordPress, and how does it work?',
    answer: 'WordPress is a free and open-source content management system used to create websites and blogs. It works by using themes and plugins to customize functionality and appearance.',
  },
  {
    question: 'How much does it cost to develop a WordPress website?',
    answer: 'Costs vary based on features, plugins, and development time. A basic site might cost $200–$500, while advanced ones can go into the thousands.',
  },
  {
    question: 'Is WordPress suitable for e-commerce websites?',
    answer: 'Yes! With plugins like WooCommerce, WordPress is widely used for building scalable and customizable e-commerce platforms.',
  },
  {
    question: 'What are the advantages of using WordPress?',
    answer: 'It’s easy to use, customizable, SEO-friendly, has a large community, and offers thousands of themes and plugins.',
  },
  {
    question: 'How do I improve my WordPress website’s speed?',
    answer: 'Use caching plugins, optimize images, use a reliable host, minimize plugins, and enable a CDN like Cloudflare.',
  },
];

const Section_e = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="max-w-5xl mx-auto py-16 px-4 text-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>

      <div className="space-y-5">
        {faqItems.map((item, idx) => (
          <div
            key={idx}
            className="border-b border-gray-200 pb-5 cursor-pointer"
            onClick={() => toggleFAQ(idx)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{item.question}</h3>
              <span className="text-blue-500 text-xl">
                {activeIndex === idx ? '−' : '+'}
              </span>
            </div>
            {activeIndex === idx && (
              <p className="mt-3 text-sm text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 ">
        <button className="bg-[#1C92FF] hover:bg-white hover:border-[#1C92FF] border-[2px] hover:text-[#1C92FF] text-white px-6 py-3 rounded-xl shadow-md transition">
          Talk to expert
        </button>
      </div>
    </section>
  );
};

export default Section_e;
