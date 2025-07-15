
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is a virtual clinic?',
        answer: 'A virtual clinic is an online healthcare platform where patients can consult with healthcare providers through video calls, chat, or virtual reality environments, offering remote medical services and treatments.'
    },
    {
        question: 'What services can be provided in a virtual clinic?',
        answer: 'Virtual clinics can offer services like telemedicine consultations, mental health counseling, prescription refills, diagnostics, and health monitoring, all through digital platforms.'
    },
    {
        question: 'How does a virtual clinic work?',
        answer: 'Virtual clinics work by connecting patients with healthcare professionals via secure online platforms. These platforms often include video conferencing, secure messaging, and access to medical records.'
    },
    {
        question: 'Is a virtual clinic secure?',
        answer: 'Virtual clinics are designed with security in mind, using encrypted communication channels and privacy regulations (like HIPAA) to protect patient data. It’s important to choose certified and regulated platforms.'
    },
    {
        question: 'Can I get a prescription from a virtual clinic?',
        answer: 'Yes, many virtual clinics allow healthcare providers to prescribe medications after an online consultation, depending on the platform’s regulations and the doctor’s assessment.'
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
