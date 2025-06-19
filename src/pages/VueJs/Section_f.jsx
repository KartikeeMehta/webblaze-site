
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is Vue.js used for?',
        answer: 'Vue.js is a progressive JavaScript framework for building user interfaces and single-page applications (SPAs).'
    },
    {
        question: 'Who are WebHow does Vue.js compare to React.js?blaze’s clients?',
        answer: 'Vue.js offers simplicity and ease of integration, while React provides more flexibility and a larger ecosystem.'
    },
    {
        question: 'Is Vue.js good for large-scale applications?',
        answer: 'Yes, with tools like Vuex for state management, Vue.js handles large applications effectively.'
    },
    {
        question: 'What are the benefits of using Vue.js for front-end development?',
        answer: 'Vue.js is lightweight, easy to learn, and provides reactive data binding for seamless user experiences.'
    },
    {
        question: 'How do I optimize Vue.js applications for performance?',
        answer: 'Use lazy loading, code splitting, and Vue’s built-in optimization techniques.'
    }
];

const Section_f = () => {
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

export default Section_f;
