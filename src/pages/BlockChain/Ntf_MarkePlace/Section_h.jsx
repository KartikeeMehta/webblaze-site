
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is an NFT marketplace?',
    answer: 'An NFT marketplace is a platform where users can buy, sell, and trade non-fungible tokens (NFTs), which represent unique digital assets like art, music, videos, and collectibles.'
  },
  {
    question: 'How do NFT marketplaces work?',
    answer: 'NFT marketplaces use blockchain technology to list, trade, and authenticate NFTs. Buyers and sellers interact through the marketplace to exchange ownership of digital assets.'
  },
  {
    question: 'Can I create my own NFT marketplace?',
    answer: 'Yes, you can create your own NFT marketplace by developing the platform and integrating blockchain features to enable users to mint, buy, and sell NFTs.'
  },
  {
    question: 'What are the fees associated with NFT marketplaces?',
    answer: 'Fees typically include listing fees, transaction fees, and minting fees, depending on the platform. Each marketplace has its own fee structure.'
  },
  {
    question: 'What blockchain is used for NFTs?',
    answer: 'Ethereum is the most popular blockchain for NFTs, but other blockchains like Binance Smart Chain, Solana, and Tezos are also used to mint and trade NFTs.'
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
