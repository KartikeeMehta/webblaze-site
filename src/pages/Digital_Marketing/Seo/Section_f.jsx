import React, { useState } from "react";

const faqs = [
  {
    question: "What is SEO and why is it important?",
    answer:
      "SEO stands for Search Engine Optimization, a process of optimizing a website to rank higher in search engine results. It is important because it helps increase organic traffic, improves visibility, and drives more potential customers to your site.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO results typically take 3-6 months to show significant changes, depending on the competition, keyword difficulty, and the quality of optimization efforts.",
  },
  {
    question: "What are on-page SEO and off-page SEO?",
    answer:
      "On-page SEO refers to optimizing elements on your website, like content, meta tags, and internal links. Off-page SEO includes activities outside your website, such as backlink building, social media promotion, and guest blogging.",
  },
  {
    question: "How do I know if my SEO efforts are working?",
    answer:
      "You can track SEO performance through tools like Google Analytics, Search Console, and keyword ranking reports. Metrics such as organic traffic, bounce rate, and conversion rates are key indicators of SEO success.",
  },
  {
    question: "Can I do SEO for my website by myself?",
    answer:
      "Yes, you can do basic SEO for your website by following best practices, but for advanced strategies and long-term success, it’s recommended to hire an experienced SEO professional or agency.",
  },
];

const Section_f = () => {
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
       <button className="bg-[#1C92FF] hover:bg-white hover:border-[#1C92FF] border-[2px] hover:text-[#1C92FF] text-white px-6 py-3 rounded-xl shadow-md transition">
          Talk to expert
        </button>
      </div>
    </div>
  );
};

export default Section_f;
