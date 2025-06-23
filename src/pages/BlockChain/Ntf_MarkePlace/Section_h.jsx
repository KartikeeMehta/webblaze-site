
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What are decentralized apps (DApps)?',
    answer: 'Decentralized apps (DApps) run on a peer-to-peer network of computers rather than a centralized server. They use blockchain or similar technology to ensure transparency, security, and control over user data.'
  },
  {
    question: 'How do decentralized apps work?',
    answer: 'DApps operate on blockchain platforms, with their backend code being open-source. They enable users to interact with smart contracts and decentralized databases to perform specific functions'
  },
  {
    question: 'What are the advantages of DApps?',
    answer: 'DApps offer enhanced security, transparency, censorship resistance, and greater control for users over their data, compared to traditional apps.'
  },
  {
    question: 'Can DApps be used for business purposes?',
    answer: 'Yes, DApps can be used for various business applications such as finance, gaming, supply chain management, and decentralized finance (DeFi).'
  },
  {
    question: 'Are decentralized apps secure?',
    answer: 'DApps are more secure due to the decentralized nature of their underlying blockchain technology. However, security depends on the platform and smart contract development.'
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
