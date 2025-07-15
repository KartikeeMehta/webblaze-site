
import React, { useState } from 'react';

const faqs = [
  {
    question: 'What are the most common types of graphic design services?',
    answer: 'Services include logo design, branding, social media graphics, packaging design, and marketing materials.'
  },
  {
    question: 'What software is best for graphic design?',
    answer: 'Popular tools include Adobe Photoshop, Illustrator, Canva, CorelDRAW, and Affinity Designer.'
  },
  {
    question: 'How much does a graphic design project cost?',
    answer: 'Costs vary widely, from $50 for simple tasks to $5,000+ for comprehensive branding projects.'
  },
  {
    question: 'What skills are essential for a graphic designer?',
    answer: 'Key skills include creativity, knowledge of design principles, typography, software proficiency, and communication.'
  },
  {
    question: 'How can graphic design enhance my brand?',
    answer: 'Graphic design builds brand identity, improves visual appeal, and helps communicate your message effectively to your target audience.'
  }
];

const Section_f = () => {
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

export default Section_f;
