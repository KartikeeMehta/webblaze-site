import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is UI/UX app design, and why is it important?',
    answer: 'UI/UX design focuses on improving user satisfaction by enhancing the usability, accessibility, and interaction with the product.'
  },
  {
    question: 'How do UI and UX differ in app design?',
    answer: 'UI refers to the visual elements, while UX is about the overall experience of the user.'
  },
  {
    question: 'What tools are commonly used for UI/UX app design?',
    answer: 'Figma, Adobe XD, Sketch, and InVision are popular tools for UI/UX design.'
  },
  {
    question: 'How long does it take to design a UI/UX for an app?',
    answer: 'It depends on the complexity of the app but typically takes 2–6 weeks.'
  },
  {
    question: 'What are the best practices for designing a user-friendly app?',
    answer: 'Keep the design simple, consistent, intuitive, and accessible to all users.'
  }
];

const Section_f = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">FAQ</h2>

        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="w-full text-left flex justify-between items-center py-4 text-base sm:text-lg font-medium text-gray-900"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-blue-500 text-2xl">
                {openIndex === index ? '-' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="pb-4 text-gray-700 text-sm sm:text-base">{faq.answer}</div>
            )}
          </div>
        ))}

        <div className="mt-12">
          <button className="bg-[#1C92FF] hover:bg-white hover:text-[#1C92FF] hover:border-[#1C92FF] border-2 text-white px-6 py-3 rounded-xl shadow-md transition-all duration-300">
            Talk to expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section_f;
