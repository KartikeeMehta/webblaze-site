
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is 3D animation?',
        answer: '3D animation is the process of creating moving images using three-dimensional digital models. It is commonly used in films, video games, advertising, and educational content to create lifelike animations.'
    },
    {
        question: 'How does 3D animation work?',
        answer: '3D animation involves creating 3D models, rigging them for movement, and animating the models through keyframes or motion capture to produce realistic or stylized movements.'
    },
    {
        question: 'What are the benefits of 3D animation for businesses?',
        answer: '3D animation allows businesses to create engaging visuals for marketing, explainer videos, product demos, and virtual environments, enhancing customer engagement and brand communication.'
    },
    {
        question: 'What software is used for 3D animation?',
        answer: 'Popular software for 3D animation includes Autodesk Maya, Blender, Cinema 4D, and 3ds Max, which provide tools for modeling, texturing, and animating 3D objects and characters.'
    },
    {
        question: 'Is 3D animation expensive?',
        answer: 'The cost of 3D animation can vary depending on the complexity, duration, and quality required. While it can be expensive for high-end productions, there are also cost-effective options for simpler projects.'
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
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-[10px] shadow-md transition">
                    Talk to expert
                </button>
            </div>
        </div>
    );
};

export default Section_k;
