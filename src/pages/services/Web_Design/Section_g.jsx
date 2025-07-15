
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What are the latest trends in web design for 2025?',
    answer: 'Trends include dark mode, interactive animations, AI-driven personalization, minimalist designs, and voice user interfaces.'
  },
  {
    question: 'How much does a custom web design cost?',
    answer: 'The cost can range from $500 to $30,000+ depending on complexity, features, and customization level.'
  },
  {
    question: 'What is the difference between web design and web development?',
    answer: 'Web design focuses on the sites visual and user interface, while web development involves coding and functionality implementation.'
  },
  {
    question: 'How do I choose the best web design company?',
    answer: 'Look for portfolios, client reviews, experience in your industry, and communication quality when selecting a web design company.'
  },
  {
    question: 'Why is responsive web design essential?',
    answer: 'Responsive design ensures your website performs well on all devices, enhancing user experience and improving SEO rankings.'
  }
];

const Section_g = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">FAQ</h2>
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

export default Section_g;
