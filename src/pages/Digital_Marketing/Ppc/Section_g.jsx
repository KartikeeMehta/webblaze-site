
import React, { useState } from 'react';

const faqs = [
    {
        question: 'What is PPC advertising?',
        answer: 'PPC is an online advertising model where advertisers pay a fee each time their ad is clicked. It’s a way to buy visits to your site rather than earning them organically through SEO.'
    },
    {
        question: 'How does Google Ads work for PPC?',
        answer: 'Google Ads allows you to create ads that appear on Google’s search results and partner websites. You bid on keywords, and your ad is shown when someone searches for those terms. You pay when a user clicks on your ad.'
    },
    {
        question: 'What is the difference between SEO and PPC?',
        answer: 'SEO focuses on organic search results, while PPC involves paid ads. SEO takes time to show results, while PPC delivers immediate traffic as soon as the ads are live.'
    },
    {
        question: 'How do I create a successful PPC campaign?',
        answer: 'Start by choosing the right keywords, setting a budget, creating compelling ad copy, and continuously testing and optimizing your campaigns based on performance data.'
    },
    {
        question: 'How do I track the effectiveness of my PPC campaigns?',
        answer: 'You can track PPC performance using Google Analytics, Google Ads’ reporting features, and conversion tracking to measure metrics like click-through rates (CTR), cost-per-click (CPC), and return on ad spend (ROAS).'
    }
];

const Section_g = () => {
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

export default Section_g;
