
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is smart contract development?',
        answer: 'Smart contract development involves creating self-executing contracts with the terms of the agreement directly written into lines of code. These contracts automatically execute once conditions are met.'
    },
    {
        question: 'Why should I use smart contracts?',
        answer: 'Smart contracts enhance security, transparency, and efficiency by eliminating the need for intermediaries, reducing the chances of fraud, and ensuring automated execution.'
    },
    {
        question: 'How do smart contracts work?',
        answer: 'Smart contracts run on blockchain networks. Once predefined conditions are met, the contract automatically executes without the need for manual intervention or third parties.'
    },
    {
        question: 'What are the benefits of developing smart contracts for my business?',
        answer: 'Benefits include lower transaction costs, faster operations, enhanced security, and trustless transactions between parties.'
    },
    {
        question: 'Which blockchain platforms are used for smart contract development?',
        answer: 'Popular platforms include Ethereum, Binance Smart Chain, Solana, and Cardano, which provide the infrastructure to build and deploy smart contracts.'
    }
];

const Section_k = () => {
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

export default Section_k;
