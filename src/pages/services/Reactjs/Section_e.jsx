
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is JavaScript used for in web development?',
        answer: 'JavaScript enables interactive features like animations, dynamic content updates, and real-time form validation.'
    },
    {
        question: 'What are the top JavaScript frameworks in 2025?',
        answer: 'Popular frameworks include React.js, Vue.js, Angular, and Svelte.'
    },
    {
        question: 'Is JavaScript essential for modern web development?',
        answer: 'Yes, JavaScript is crucial for front-end, back-end, and full-stack development.'
    },
    {
        question: 'How do I debug JavaScript code effectively?',
        answer: 'Use browser developer tools, console logs, and debugging tools like Visual Studio Code or Chrome DevTools.'
    },
    {
        question: 'What are the differences between JavaScript and TypeScript?',
        answer: 'TypeScript is a superset of JavaScript with added type-checking and better debugging features.'
    }
];

const Section_e = () => {
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

export default Section_e;
