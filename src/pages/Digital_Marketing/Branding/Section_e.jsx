
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is branding and why is it important?',
        answer: 'Branding is the process of creating a unique identity for a company or product, encompassing its logo, design, messaging, and values. It’s important because it helps build recognition, trust, and loyalty with customers.'
    },
    {
        question: 'How do I build a strong brand identity?',
        answer: 'A strong brand identity is built through consistent visual elements (logos, colors, fonts), clear messaging, a compelling story, and delivering on your brand promise.'
    },
    {
        question: 'What are the key elements of a brand strategy?',
        answer: 'Key elements include your brand’s mission, vision, target audience, unique value proposition, messaging, tone of voice, and brand aesthetics (logos, website, packaging).'
    },
    {
        question: 'How does branding impact customer perception?',
        answer: 'Branding influences how customers perceive your company. A strong brand communicates quality, reliability, and values, helping you stand out in a crowded market and build customer loyalty.'
    },
    {
        question: 'Can branding help with customer retention?',
        answer: 'Yes, effective branding creates an emotional connection with customers, helping build trust and loyalty, which leads to repeat business and long-term relationships.'
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
                <button className="bg-[#1C92FF] hover:bg-white hover:border-[#1C92FF] border-[2px] hover:text-[#1C92FF] text-white px-6 py-3 rounded-xl shadow-md transition">
                    Talk to expert
                </button>
            </div>
        </div>
    );
};

export default Section_e;
