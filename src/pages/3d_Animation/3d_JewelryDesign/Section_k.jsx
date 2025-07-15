
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is 3D jewelry design?',
        answer: '3D jewelry design involves using 3D modeling software to create detailed and realistic digital designs of jewelry pieces, allowing for more precise and creative designs that can be 3D printed or manufactured.'
    },
    {
        question: 'How does 3D jewelry design work?',
        answer: 'Designers use CAD (computer-aided design) software to create 3D models of jewelry pieces. These designs can be visualized in a virtual environment before being produced through 3D printing or traditional manufacturing methods.'
    },
    {
        question: 'What are the advantages of 3D jewelry design?',
        answer: 'Advantages include precise customization, reduced production costs, faster prototyping, and the ability to test and visualize designs before making physical products.'
    },
    {
        question: 'Can I customize jewelry using 3D design?',
        answer: 'Yes, 3D jewelry design allows for full customization, from selecting materials and gemstones to creating unique shapes and styles.'
    },
    {
        question: 'What software is used for 3D jewelry design?',
        answer: 'Popular software for 3D jewelry design includes Rhino, MatrixGold, and ZBrush, which are specifically tailored for creating intricate and detailed jewelry designs.'
    }
];

const Section_k = () => {
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
                <button className="bg-[#1C92FF] hover:bg-white hover:border-[#1C92FF] border-[2px] hover:text-[#1C92FF] text-white px-6 py-3 rounded-xl shadow-md transition">
                    Talk to expert
                </button>
            </div>
        </div>
    );
};

export default Section_k;
