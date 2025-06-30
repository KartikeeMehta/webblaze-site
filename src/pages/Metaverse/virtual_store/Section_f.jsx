
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is a virtual store?',
        answer: 'A virtual store is an online store within a digital platform or virtual environment where users can browse and shop for products or services, often using 3D avatars or immersive technologies like VR.'
    },
    {
        question: 'How does a virtual store work?',
        answer: 'A virtual store operates by providing a digital shopping environment where users can interact with the products, view them in 3D, try them virtually, and make purchases using digital payment methods.'
    },
    {
        question: 'What are the benefits of having a virtual store?',
        answer: 'Virtual stores offer enhanced customer engagement, 24/7 accessibility, immersive shopping experiences, and the ability to reach a global audience without the limitations of a physical store.'
    },
    {
        question: 'How do I set up a virtual store?',
        answer: 'To set up a virtual store, you need to choose a platform (like a Metaverse environment or a 3D e-commerce platform), design your store layout, integrate payment gateways, and upload product listings.'
    },
    {
        question: 'Can I sell physical products in a virtual store?',
        answer: 'Yes, you can sell both physical and virtual products in a virtual store. Many businesses integrate their real-world inventories with digital environments to offer a hybrid shopping experience.'
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
