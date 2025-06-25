import React, { useState } from "react";

const faqs = [
  {
    question: "What is hotel management software used for?",
    answer:
      "Managing reservations, front desk operations, housekeeping, billing, and customer relationships.",
  },
  {
    question: "How does it benefit hotels?",
    answer:
      "Streamlines operations, enhances guest experience, and boosts revenue.",
  },
  {
    question: "Is it suitable for small hotels?",
    answer:
      "Yes, many solutions cater to small and medium-sized hotels with affordable pricing.",
  },
  {
    question: "What features should I look for?",
    answer:
      "Reservation management, channel management, guest feedback, and POS integration.",
  },
  {
    question: "Can it integrate with OTAs like Booking.com?",
    answer:
      "Yes, most systems include channel managers for OTA integration.",
  },
];

const Section_e = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="border-b">
          <button
            className="w-full text-left flex justify-between items-center py-4 text-lg font-medium text-gray-900"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="text-blue-500 text-2xl">
              {openIndex === index ? "-" : "+"}
            </span>
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

export default Section_e;
