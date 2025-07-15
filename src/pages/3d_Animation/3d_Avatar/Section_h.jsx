
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is a 3D avatar?',
        answer: 'A 3D avatar is a digital representation of a user in a virtual environment, created using 3D modeling software. It can be customized to reflect the user’s appearance and used in gaming, social media, or virtual spaces.'
    },
    {
        question: 'How are 3D avatars created?',
        answer: '3D avatars are created using 3D modeling software or scanning technologies. Users can either design their avatars from scratch or use pre-made templates for customization.'
    },
    {
        question: 'Can I use my 3D avatar in games and virtual worlds?',
        answer: 'Yes, 3D avatars are commonly used in games, virtual environments, and Metaverse platforms, allowing users to interact and engage in various activities.'
    },
    {
        question: 'How realistic can a 3D avatar look?',
        answer: '3D avatars can range from cartoonish to highly realistic, depending on the technology and the level of detail the creator wishes to incorporate.'
    },
    {
        question: 'What are the uses of 3D avatars?',
        answer: '3D avatars are used for social interaction, gaming, virtual shopping, digital identity creation, and as a tool for online education or professional presentations in virtual environments.'
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
               <button className="bg-[#1C92FF] hover:bg-white hover:border-[#1C92FF] border-[2px] hover:text-[#1C92FF] text-white px-6 py-3 rounded-xl shadow-md transition">
          Talk to expert
        </button>
            </div>
        </div>
    );
};

export default Section_h;
