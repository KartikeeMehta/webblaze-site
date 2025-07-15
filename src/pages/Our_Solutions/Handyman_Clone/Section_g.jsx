
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What features are included in a handyman clone app?',
        answer: 'Booking, scheduling, service tracking, payments, and customer feedback.'
    },
    {
        question: 'How much does it cost to develop a handyman clone?',
        answer: 'Costs range from $5,000 to $30,000.'
    },
    {
        question: 'Can I customize the app for specific services?',
        answer: 'Yes, it’s fully customizable for various service types.'
    },
    {
        question: 'Does it support multi-language functionality?',
        answer: 'Yes, multi-language support can be included.'
    },
    {
        question: 'Is it suitable for small businesses?',
        answer: 'Yes, it’s ideal for startups and small businesses.'
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
                <button className="bg-[#1C92FF] hover:bg-white hover:border-[#1C92FF] border-[2px] hover:text-[#1C92FF] text-white px-6 py-3 rounded-xl shadow-md transition">
                    Talk to expert
                </button>
            </div>
        </div>
    );
};

export default Section_g;
