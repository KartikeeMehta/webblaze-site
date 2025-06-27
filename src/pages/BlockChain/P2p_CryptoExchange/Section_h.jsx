
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is a P2P crypto exchange?',
        answer: 'A P2P (peer-to-peer) crypto exchange allows users to trade cryptocurrencies directly with each other without the need for an intermediary or centralized exchange. The platform connects buyers and sellers and facilitates secure transactions.'
    },
    {
        question: 'How does a P2P crypto exchange work?',
        answer: 'P2P exchanges match buyers and sellers based on their trade preferences. After agreeing on the terms, an escrow service holds the cryptocurrency until the transaction is confirmed, ensuring both parties are protected.'
    },
    {
        question: 'Is P2P crypto exchange safe?',
        answer: 'Yes, P2P exchanges provide safety measures like escrow services, user verification, and dispute resolution systems. However, it’s important to be cautious and use trusted platforms for security.'
    },
    {
        question: 'Can I buy and sell crypto on a P2P exchange?',
        answer: 'Yes, you can buy and sell various cryptocurrencies like Bitcoin, Ethereum, and more on a P2P exchange, directly from other users.'
    },
    {
        question: 'What are the fees associated with P2P crypto exchanges?',
        answer: 'Fees vary depending on the platform. Some exchanges charge a small fee for transactions, while others may be fee-free or have higher fees based on the payment method.'
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
