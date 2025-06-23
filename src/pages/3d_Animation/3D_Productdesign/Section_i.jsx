
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is 3D product design?',
        answer: '3D product design involves creating digital models of products using 3D modeling software. These designs can be used for prototypes, production, and visualization before manufacturing.'
    },
    {
        question: 'How does 3D product design help businesses?',
        answer: 'It allows businesses to visualize products, make design changes quickly, create prototypes without the need for physical models, and streamline the production process.'
    },
    {
        question: 'What software is used in 3D product design?',
        answer: 'Common software used for 3D product design includes AutoCAD, SolidWorks, Blender, and Fusion 360, each offering tools for detailed product creation.'
    },
    {
        question: 'Can 3D product design be used for consumer goods?',
        answer: 'Yes, 3D product design is widely used for consumer goods, including electronics, furniture, clothing, and even food packaging, allowing designers to refine products before manufacturing.'
    },
    {
        question: 'Is 3D product design cost-effective?',
        answer: 'Yes, 3D product design can be cost-effective by reducing the need for multiple prototypes, speeding up design iterations, and reducing errors in the manufacturing process.'
    }
];

const Section_i = () => {
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

export default Section_i;
