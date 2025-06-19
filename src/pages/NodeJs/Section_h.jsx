
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is Node.js used for?',
        answer: 'Node.js is used for server-side development, enabling scalable and efficient web applications.'
    },
    {
        question: 'Why is Node.js popular for back-end development?',
        answer: 'Its event-driven, non-blocking I/O model ensures high performance for real-time applications.'
    },
    {
        question: 'Can Node.js be used for front-end development?',
        answer: 'Node.js itself isn’t used for front-end but supports tools like Webpack and Gulp for front-end workflows.'
    },
    {
        question: 'How much does it cost to develop a Node.js application?',
        answer: 'Costs range from $500 to $50,000+, depending on the app’s complexity and features.'
    },
    {
        question: 'What are the top Node.js frameworks in 2025?',
        answer: 'Popular frameworks include Express.js, Nest.js, and Koa.js.'
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
