import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is Google Ads?',
    answer: 'Google Ads is an online advertising platform where businesses can create ads to appear on Google’s search results and other Google-affiliated websites. You pay for each click or impression your ad receives.'
  },
  {
    question: 'How do I set up a Google Ads campaign?',
    answer: 'To set up a campaign, you need a Google Ads account. Select your campaign type, set a budget, choose keywords, create your ad, and set targeting options. Once live, monitor performance and optimize.'
  },
  {
    question: 'How much does Google Ads cost?',
    answer: 'The cost of Google Ads depends on your bidding strategy, competition, and chosen keywords. You can set a daily budget, and costs are based on clicks (CPC) or impressions (CPM).'
  },
  {
    question: 'How do I improve my Google Ads Quality Score?',
    answer: 'Improve your Quality Score by focusing on relevance, creating targeted ads, using relevant keywords, and optimizing landing pages for better user experience.'
  },
  {
    question: 'What is the difference between Google Ads and Facebook Ads?',
    answer: 'Google Ads targets users based on their search intent, making it ideal for capturing demand. Facebook Ads target users based on demographics, interests, and behaviors, making it ideal for building brand awareness and driving engagement.'
  }
];

const Section_g = () => {
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

export default Section_g;

