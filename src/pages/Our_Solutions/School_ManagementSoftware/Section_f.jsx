
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What are the benefits of school management software?',
        answer: 'Simplifies administrative tasks, enhances communication, and manages student data efficiently.'
    },
    {
        question: 'What features does it offer?',
        answer: 'Attendance tracking, timetable management, fee payment, and report generation.'
    },
    {
        question: 'How much does it cost to develop?',
        answer: 'Costs range from $3,000 to $30,000 based on features.'
    },
    {
        question: 'Is it suitable for small schools?',
        answer: 'Yes, it’s scalable for small to large institutions.'
    },
    {
        question: 'Does it support online classes?',
        answer: 'Yes, many solutions include LMS features for virtual learning.'
    }
];

const Section_f = () => {
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
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-[10px] shadow-md transition">
                    Talk to expert
                </button>
            </div>
        </div>
    );
};

export default Section_f;
