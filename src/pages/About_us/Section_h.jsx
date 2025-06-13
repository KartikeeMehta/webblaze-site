import React, { useState } from "react";

const faqs = [
  {
    question: "What services does Webblaze offer?",
    answer: "We offer web development, mobile app development, UI/UX design, branding, and digital marketing services.",
  },
  {
    question: "Who are Webblaze’s clients?",
    answer: "Our clients range from startups to established businesses across India and globally.",
  },
  {
    question: "How can I get started with Webblaze?",
    answer: "You can start by contacting us through our website. We’ll set up a discovery call and guide you from there.",
  },
  {
    question: "Does Webblaze offer customized solutions?",
    answer: "Yes, all our solutions are tailored to fit your business goals and budget.",
  },
  {
    question: "Where is Webblaze located?",
    answer: "We are based in Mohali, INDIA, but we serve clients globally.",
  },
];

const Section_h = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center py-4 text-left text-gray-800 font-semibold hover:text-gray-900"
              >
                <span>{faq.question}</span>
                <span className="text-blue-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_h;
