
import React, { useState } from 'react';

const faqs = [
    {
        question: 'Why is React.js so popular for web development?',
        answer: 'React.js is favored for its component-based architecture, performance optimization, and rich ecosystem'
    },
    {
        question: 'Is React.js suitable for mobile app development?',
        answer: 'Yes, React Native, built on React.js, is widely used for mobile app development.'
    },
    {
        question: 'How long does it take to learn React.js?',
        answer: 'Beginners can grasp the basics in 1-2 weeks, but mastering advanced concepts may take 2-3 months.'
    },
    {
        question: 'What are React.js hooks, and why are they important?',
        answer: 'Hooks like useState and useEffect allow functional components to manage state and lifecycle methods.'
    },
    {
        question: 'What is the difference between React.js and Angular?',
        answer: 'React is a library focused on UI, while Angular is a full-fledged framework with more built-in features.'
    }
];

const Section_e = () => {
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

export default Section_e;
